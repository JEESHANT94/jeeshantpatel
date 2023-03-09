var HTTP_PORT = process.env.port || 8080;
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Jeeshant Patel");
});
app.get("/about", (req, res) => {
  res.send("Welcome in about page");
});
app.listen(HTTP_PORT);
