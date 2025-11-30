import express from "express";
import { generateTrip } from "../controllers/tripController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.post("/generate", verifyToken, generateTrip);

export default router;
