import express, {Request, Response} from 'express';
import db from './config/database.config';
import router from './router';

const app = express();

app.use(express.json())

app.use("/api", router);

export default app;