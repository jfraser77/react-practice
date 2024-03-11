const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const { OpenAI } = require("openai");
require("dotenv").config();

app.get("/", (req, res) => res.json("Welcome to my Haiku API!"));

app.get("/haiku", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "write a haiku." }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
    // res.json("This is my Haiku!");
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
