import express from 'express';
import { fetchUserInfo, createDonation, deleteDonation } from '../controller/donationController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import upload from '../config/multerConfig.js';

const router = express.Router();

router.get('/user-info/:userId', authenticateToken, fetchUserInfo);
router.post('/donate', authenticateToken, upload.array('images', 10), createDonation);
router.delete('/donate/:id', authenticateToken, deleteDonation); 

export default router;
