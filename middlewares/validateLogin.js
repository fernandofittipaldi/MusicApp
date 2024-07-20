import { decodeToken } from '../utils/token.js';

// export const validateLogin = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     console.log(token);
//     if (!token) throw new Error ('Invalid login');
//     const { id, name } = decodeToken(token);
//     req.user = { id, name };
//     next();
//   } catch (error) {
//     res.status(500).send({ success: false, message: error.message});
//   }
// }

export const validateLogin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error('No authorization header found');

    const token = authHeader.split(' ')[1];
    if (!token) throw new Error('Invalid login');

    console.log(token);
    const { id, name } = decodeToken(token);
    req.user = { id, name };
    next();
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}


// import jwt from "jsonwebtoken";
// import { SECRET } from "../config/config.js";

// export const validateLogin = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).send({ success: false, message: 'No token provided' });
//   }

//   jwt.verify(token, SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(500).send({ success: false, message: 'Failed to authenticate token' });
//     }
//     req.user = decoded; // Establecer el usuario decodificado en req.user
//     next();
//   });
// };

