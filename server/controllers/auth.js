import jwt from 'jsonwebtoken';
import sendgrid from '@sendgrid/mail';

import User from '../models/user.js';
import { pick } from '../helpers/utils.js';
import emailVerificationTemp from '../templates/emailVerificationTemp.js';

import {
  BAD_REQUEST_400,
  INTERNAL_ERROR_500,
  OK_200,
  UNAUTHORIZED_401,
} from '../constants/statusCodes.js';

export const registration = (req, res) => {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const { name, email, password } = req.body;

  // Check if a user with this email already exists
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(BAD_REQUEST_400).json({
          error: true,
          data: 'Email is taken.',
        });
      }
    })
    .catch((error) => {
      console.log('Sign up error:', error);
      return res.status(INTERNAL_ERROR_500).json({
        error: true,
        data: error,
      });
    });

  const token = jwt.sign({ name, email, password }, process.env.JWT_ACOUNT_ACTIVATION, {
    expiresIn: '10m',
  });

  const emailData = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Account activation link',
    html: emailVerificationTemp(token),
  };

  // Sending verification email
  sendgrid
    .send(emailData)
    .then((sent) => {
      console.log('SENT', sent);
      return res.status(OK_200).json({
        error: false,
        data: `Email has been sent to ${email}`,
      });
    })
    .catch((error) => {
      console.log('Error while sending activation email', error);
      return res.status(UNAUTHORIZED_401).json({
        error: true,
        data: error,
      });
    });
};

export const activation = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACOUNT_ACTIVATION, function (error) {
      if (error) {
        console.log('JWT VERIFY IN ACCOUNT ACTIVATION ERROR', error);
        return res.status(UNAUTHORIZED_401).json({
          error: true,
          data: 'Expired link. Sign up again.',
        });
      }

      const { name, email, password } = jwt.decode(token);
      const user = new User({ name, email, password });
      const newUserData = pick(user, ['name', 'email', 'role']);

      user
        .save()
        .then(() => {
          return res.status(OK_200).json({
            error: false,
            data: newUserData,
          });
        })
        .catch((error) => {
          console.log('Error while saving the user', error);
          return res.status(UNAUTHORIZED_401).json({
            error: true,
            data: 'Error while saving the user',
          });
        });
    });
  } else {
    return res.status(INTERNAL_ERROR_500).json({
      error: true,
      data: 'Something went wrong.',
    });
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(BAD_REQUEST_400).json({
          error: true,
          data: 'User with this email does not exist. Please sign up.',
        });
      }

      if (!user.authenticate(password)) {
        return res.status(BAD_REQUEST_400).json({
          error: true,
          data: 'Email or password are wrong.',
        });
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });
      const userData = pick(user, ['_id', 'name', 'email', 'role']);

      return res.status(OK_200).json({
        error: false,
        data: { token, user: userData },
      });
    })
    .catch(() => {
      return res.status(BAD_REQUEST_400).json({
        error: true,
        data: 'User with this email does not exist. Please sign up.',
      });
    });
};
