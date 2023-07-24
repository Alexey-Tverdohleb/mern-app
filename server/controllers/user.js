import User from '../models/user.js';
import { INTERNAL_ERROR_500, OK_200, NOT_FOUND_404 } from '../constants/statusCodes.js';

export const getUser = (req, res) => {
  const { userId } = req;

  User.findOne({ _id: userId })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(NOT_FOUND_404).json({
          error: true,
          message: 'User not found.',
          data: null,
        });
      }

      return res.status(OK_200).json({
        error: false,
        message: 'Got user by id.',
        data: user,
      });
    })
    .catch((error) => {
      return res.status(INTERNAL_ERROR_500).json({
        error: true,
        message: 'Something went wrong.',
        data: error,
      });
    });
};

export const getAllUsers = (req, res) => {
  return res.status(OK_200).json({
    error: false,
    message: 'List of all users.',
    data: [],
  });
};
