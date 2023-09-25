import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../services/userServices';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await getUserByEmail(decoded.data.email);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export { authenticate };
