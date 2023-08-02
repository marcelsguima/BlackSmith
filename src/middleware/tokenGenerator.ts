import { sign, verify, Secret, Algorithm } from 'jsonwebtoken';
import { Payload } from '../interfaces';

const secret = process.env.JWT_SECRET ?? '';

const JWT_SECRET: { algorithm: Algorithm; expiresIn: string } = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const generateToken = (payload:Payload) => {
  const token = sign(payload, secret as Secret, JWT_SECRET);
  return token;
};

const verifyToken = (token:string) => {
  const decoded = verify(token, secret as Secret);
  return decoded;
};

export { generateToken, verifyToken };