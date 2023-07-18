import express from 'express';

import { signUp, accountActivation, signIn } from '../controllers/auth.js';
import { userSignUpValidator, userSignInValidator } from '../validators/auth.js';
import { runValidation } from '../validators/index.js';

const authRouter = express.Router();

authRouter.post('/signup', userSignUpValidator, runValidation, signUp);
authRouter.post('/account-activation', accountActivation);
authRouter.post('/signin', userSignInValidator, runValidation, signIn);

export default authRouter;
