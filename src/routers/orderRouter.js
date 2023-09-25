import express from 'express';
import { create, getOrders } from '../controllers/orderController';
import { authenticate } from '../auth/validateJWT';

const router = express.Router();

router.post('/', authenticate, create);
router.get('/:userId', authenticate, getOrders);

export default router;
