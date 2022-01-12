import express, { Request, Response } from 'express';
import cors from 'cors';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request: Request, response: Response) => {
  response.status(200).json({
    message: 'live'
  });
});

app.listen(process.env.APP_PORT);