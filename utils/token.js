import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const generateToken = (payload) => {
  try {
    const token = jwt.sign(payload, SECRET, { expiresIn: '2d' });
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Error generating token');
  }
}

export const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    throw new Error('Invalid token');
  };
}