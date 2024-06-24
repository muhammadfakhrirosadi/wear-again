import express from 'express';
import { createOrder, getOrder, removeOrder } from '../controller/orderController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateToken, createOrder);
router.get('/:id_pesanan', authenticateToken, getOrder);
router.delete('/:id_pesanan', authenticateToken, removeOrder);

export default router;
