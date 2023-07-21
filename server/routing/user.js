import express from 'express';

import privateRoute from '../middlewares/privateRoute.js';
import { getAllUsers, getUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.get('/user', privateRoute, getUser);

userRouter.get('/users', privateRoute, getAllUsers);

export default userRouter;
