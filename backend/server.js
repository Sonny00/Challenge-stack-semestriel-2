const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const port = 5001;
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});
