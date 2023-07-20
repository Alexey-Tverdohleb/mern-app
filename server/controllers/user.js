import { OK_200 } from '../constants/statusCodes.js';

export const getUser = (req, res) => {
  const id = req;
  console.log(id);

  return res.status(OK_200).json({
    error: false,
    message: 'User by id.',
    data: [],
  });
};

export const getAllUsers = (req, res) => {
  return res.status(OK_200).json({
    error: false,
    message: 'List of all users.',
    data: [],
  });
};
