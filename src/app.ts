import express from 'express';
import cors from 'cors';
import homeRouter from './router/homeRouter'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', homeRouter)

export default app;
