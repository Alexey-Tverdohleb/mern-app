import express from 'express';

import { registration, login, activation, checkAuth } from '../controllers/auth.js';
import { userRegistrationValidator, userLoginValidator } from '../validators/auth.js';
import { runValidation } from '../validators/index.js';
import privateRoute from '../middlewares/privateRoute.js';

const authRouter = express.Router();

authRouter.post('/registration', userRegistrationValidator, runValidation, registration);
authRouter.post('/activation', activation);
authRouter.post('/login', userLoginValidator, runValidation, login);

authRouter.get('/check', privateRoute, checkAuth);

export default authRouter;
