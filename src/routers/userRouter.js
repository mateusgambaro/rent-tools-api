import express from 'express';
import { create, getAllUsers, userById } from '../controllers/userController';
import { authenticate } from '../auth/validateJWT';
import { emailValidation, passwordValidation } from '../middlewares/validations';

const router = express.Router();

router.get('/', authenticate, getAllUsers);
router.get('/:id', authenticate, userById);
router.post('/', emailValidation, passwordValidation, create);

export default router;
