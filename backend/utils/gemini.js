import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Text-only model
export const gemini = genAI.getGenerativeModel({
  model: "gemini-pro"
});

// Vision model (for OCR)
export const geminiVision = genAI.getGenerativeModel({
  model: "gemini-pro-vision"
});
