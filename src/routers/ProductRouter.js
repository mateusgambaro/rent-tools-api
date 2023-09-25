import express from 'express';
import { create, getAll } from '../controllers/productsController';
import { authenticate } from '../auth/validateJWT';

const router = express.Router();

router.post('/', authenticate, create);
router.get('/', getAll);

export default router;
