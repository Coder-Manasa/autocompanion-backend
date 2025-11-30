import { gemini } from "../utils/gemini.js";

export const askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    const result = await gemini.generateContent(prompt);
    res.json({ reply: result.response.text() });
  } catch (err) {
    res.status(500).json({ message: "AI Error" });
  }
};
