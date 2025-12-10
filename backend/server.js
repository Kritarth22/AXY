const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "FQt2tJeBQWK7cLcnM4Q8B6bxUybieET0";

app.get("/search", async (req, res) => {
  const q = req.query.q;
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${q}&limit=20`
  );
  const data = await response.json();
  res.json(data.data);
});

app.get("/trending", async (req, res) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`
  );
  const data = await response.json();
  res.json(data.data);
});

app.get("/random", async (req, res) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const data = await response.json();
  res.json(data.data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
