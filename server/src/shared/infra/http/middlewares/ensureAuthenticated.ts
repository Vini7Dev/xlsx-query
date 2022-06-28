import {
  Request, Response, NextFunction, request,
} from 'express';
import { verify } from 'jsonwebtoken';

import authConfigs from '@configs/authConfigs';
import AppError from '@shared/errors/AppError';

interface ITokenPayload {
  sub: string;
}

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    throw new AppError('token not found', 401);
  }

  const [, token] = bearerToken.split(' ');

  try {
    const { secret } = authConfigs.jwt;

    const { sub: user_id } = verify(token, secret) as ITokenPayload;

    request.user = {
      id: user_id,
    };

    return next();
  } catch {
    throw new AppError('invalid token', 401);
  }
}
