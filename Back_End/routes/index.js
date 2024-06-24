import express from "express";
import authRoutes from "./authRoutes.js";
import profileRoutes from "./profileRoutes.js";
import donationRoutes from './donationRoutes.js';
import orderRoutes from './orderRoutes.js';

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);
router.use('/donations', donationRoutes);
router.use('/orders', orderRoutes); 

export default router;
