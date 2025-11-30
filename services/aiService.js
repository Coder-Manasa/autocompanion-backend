require("dotenv").config();
const axios = require("axios");

async function askAI(prompt) {
  try {
    const url = "https://api.openai.com/v1/chat/completions";

    const response = await axios.post(
      url,
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Error:", error.response?.data || error);
    throw new Error("AI request failed");
  }
}

module.exports = askAI;
