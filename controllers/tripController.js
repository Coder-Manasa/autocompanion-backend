import { gemini } from "../utils/gemini.js";

export const generateTrip = async (req, res) => {
  try {
    const { from, to, days, style } = req.body;

    const prompt = `
      Create a detailed driving itinerary.
      From: ${from}
      To: ${to}
      Days: ${days || 3}
      Style: ${style}

      Give the output in clean JSON:
      [
        { "title": "", "detail": "", "eta": "" }
      ]
    `;

    const result = await gemini.generateContent(prompt);
    const text = result.response.text();

    res.json({ itinerary: JSON.parse(text) });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "AI failed" });
  }
};
