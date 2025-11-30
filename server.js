import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import tripRoutes from "./routes/tripRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import ocrRoutes from "./routes/ocrRoutes.js";
import emergencyRoutes from "./routes/emergencyRoutes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res) => res.send("AutoCompanion Backend Running"));

app.use("/api/trip", tripRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/ocr", ocrRoutes);
app.use("/api/emergency", emergencyRoutes);

app.listen(process.env.PORT, () =>
  console.log(`🚀 Backend running on port ${process.env.PORT}`)
);
