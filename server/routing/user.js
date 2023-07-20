import express from 'express';

import { getAllUsers, getUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/user/:id', getUser);

userRouter.get('/users', getAllUsers);

export default userRouter;
