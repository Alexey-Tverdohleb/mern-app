import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import authRouter from './routing/auth.js';
import userRouter from './routing/user.js';

const app = express();

dotenv.config();

// connect to database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB connection error', err));

// app middlewares
app.use(morgan('dev'));

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(bodyParser.json());

// middleware
app.use('/api', authRouter);
app.use('/api', userRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} - ${process.env.NODE_ENV}`);
});
