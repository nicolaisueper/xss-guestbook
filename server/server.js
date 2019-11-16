const path = require("path");
const express = require("express");
const api = require("./api");

const app = express();

app.use("/", express.static("client"));
app.use(express.json());

app.use("/api", api);

app.listen(3000, function () {
  console.log('XSS Playground listening on port 3000!');
});
