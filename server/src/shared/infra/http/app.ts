import express from 'express';
import '../typeorm/index';

const app = express();

app.use(express.json());

export default app;
