import jwt from 'jsonwebtoken';

import { UNAUTHORIZED_401 } from '../constants/statusCodes.js';
import { AUTHORIZATION } from '../constants/headers.js';

export default function privateRoute(req, res, next) {
  const token = req.headers?.[AUTHORIZATION]?.split(' ')[1];

  if (!token) {
    return res.status(UNAUTHORIZED_401).json({
      error: true,
      message: '401 Unauthorized. Token is not valid.',
      data: null,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(UNAUTHORIZED_401).json({
        error: true,
        message: '401 Unauthorized. Token is not valid.',
        data: null,
      });
    }

    const { _id } = decoded;
    req.userId = _id;
    next();
  });
}
