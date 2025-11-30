import multer from "multer";
import { geminiVision } from "../utils/gemini.js";

const upload = multer({ storage: multer.memoryStorage() });

export const uploadMiddleware = upload.single("file");

export const extractDocument = async (req, res) => {
  try {
    const imgBytes = req.file.buffer.toString("base64");

    const prompt = `
      Extract important vehicle document fields from this image.
      Return JSON only:
      {"Vehicle No": "", "Owner": "", "Expiry": ""}
    `;

    const result = await geminiVision.generateContent([
      prompt,
      {
        inlineData: {
          data: imgBytes,
          mimeType: req.file.mimetype
        }
      }
    ]);

    res.json(JSON.parse(result.response.text()));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "OCR failed" });
  }
};
