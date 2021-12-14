const express = require("express");

const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
// userName and Pass
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const url = process.env.DB_URL;
app.get("/", (req, res) => {
  res.json("Hello Root");
});

app.listen(port, () => {
  console.log("I am listening");
});
