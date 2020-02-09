"use strict";

const express = require("express");

// Constants
const PORT = 4000;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("future for you");
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
