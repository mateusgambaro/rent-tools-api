import rescue from 'express-rescue';
import dotenv from 'dotenv';
import { tokenLogin } from '../services/loginServices';

dotenv.config();

const login = rescue(async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogged = await tokenLogin({ email, password });
    
    if (userLogged.message) return res.status(userLogged.code).json(userLogged.message);
    
    return res.status(200).json({ userLogged });
  } catch (error) {
    console.log(error.message);
  }
});

export { login };