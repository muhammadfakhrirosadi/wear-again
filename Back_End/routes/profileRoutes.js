import express from "express";
import { getProfile, updateProfile } from "../controller/profileController.js";

const router = express.Router();

router.get("/get", getProfile);
router.post("/edit", updateProfile);

export default router;
