import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, {expiresIn: '2d'})
  return token;
}

export const decodeToken = (token) => {
  const decode = jwt.verify(token, SECRET);
  return decode;
}