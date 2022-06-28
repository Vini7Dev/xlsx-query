import { Request, Response, NextFunction } from 'express';

export default async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  //
}
