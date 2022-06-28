import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import '../mongoose';
import '../../container';
import AppError from '@shared/errors/AppError';
import appRoutes from './routes';

const app = express();

app.use(express.json());
app.use(appRoutes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction): Response => {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  console.log('[Internal server error]', err);
  return res.status(500).json({
    status: 500,
    message: 'Internal server error.',
  });
});

export default app;
