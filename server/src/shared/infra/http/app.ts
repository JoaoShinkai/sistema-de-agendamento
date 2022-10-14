import '@shared/container';
import { errorsHandler } from '@shared/handlers/ErrorsHandler';
import express from 'express';
import '../typeorm/index';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorsHandler);

export default app;
