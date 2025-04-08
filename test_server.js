// FILE: server.js
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  const query = req.query.query || "";

  if (!query.trim()) {
    return res.status(400).send("Missing 'query' parameter in URL");
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: query }],
      }),
    });

    const data = await groqRes.json();
    const answer = data.choices?.[0]?.message?.content || "No response";

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(answer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`InstantGPT running at http://localhost:${PORT}`);
});
