import express from 'express';

import { registration, login, activation, checkToken } from '../controllers/auth.js';
import { userRegistrationValidator, userLoginValidator } from '../validators/auth.js';
import { runValidation } from '../validators/index.js';

const authRouter = express.Router();

authRouter.post('/registration', userRegistrationValidator, runValidation, registration);
authRouter.post('/activation', activation);
authRouter.post('/login', userLoginValidator, runValidation, login);
authRouter.post('/check', checkToken);

export default authRouter;
