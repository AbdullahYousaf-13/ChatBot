const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // serve frontend

// Chat endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "smollm:1.7b",
        prompt: userMessage,
        stream: false
      })
    });

    const data = await response.json();
    res.json({ reply: data.response.trim() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ reply: "Error talking to Ollama." });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
