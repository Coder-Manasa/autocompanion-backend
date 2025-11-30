import express from "express";
import { sendSOS } from "../controllers/emergencyController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.post("/sos", verifyToken, sendSOS);

export default router;
