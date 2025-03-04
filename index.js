require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8888;

app.use("/", express.static("public"));

app.get("/ping", function (req, res) {
  console.log("req =", req);
  console.log("ip =", req.ip);
  console.log(req.method);

  res.send("pong");
});

app.get("/dog-breeds", function (req, res) {
  res.send(["maltese", "german shepard", "poodle", "terrier"]);
});

app.listen(PORT, function () {
  console.log("server running on port:", PORT);
});
