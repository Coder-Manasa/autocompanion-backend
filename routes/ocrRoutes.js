import express from "express";
import { extractDocument, uploadMiddleware } from "../controllers/ocrController.js";

const router = express.Router();
router.post("/extract", uploadMiddleware, extractDocument);

export default router;
