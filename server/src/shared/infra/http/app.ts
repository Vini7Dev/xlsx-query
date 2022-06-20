import express from 'express';

import '../mongoose';
import appRoutes from './routes';

const app = express();

app.use(express.json());
app.use(appRoutes);

export default app;
