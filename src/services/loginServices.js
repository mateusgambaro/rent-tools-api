import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../../models';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const tokenLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { 
      code: 400,
      message: {
        message: 'Invalid fields',
      } 
    };
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  const userLogged = {
    id: user.id,
    token
  }
  return userLogged;
};

export { tokenLogin };