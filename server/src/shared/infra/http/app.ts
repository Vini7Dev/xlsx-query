import express from 'express';

const app = express();

app.get('/', (_req, res) => res.json({ message: 'Success!' }));

export default app;
