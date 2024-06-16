import { decodeToken } from '../utils/token.js';

export const validateLogin = async (req, res, next) => {
  try {
    const { token } =req.cookies
    if (!token) throw new Error ('Invalid login');
    const { id, name } = decodeToken(token);
    req.user = { id, name };
    next();
  } catch (error) {
    res.status(500).send({ success: false, message: error.message});
  }
}