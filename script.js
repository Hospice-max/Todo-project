const express = require("express");
const app = express();
const path = require("path");
const port = 5500;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`server start on port ${port}`);
});

