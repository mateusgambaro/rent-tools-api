import express from 'express';
import { login } from '../controllers/loginController';
// import { loginValidation } from '../middlewares/validations';

const router = express.Router();

router.post('/', login);

export default router;
