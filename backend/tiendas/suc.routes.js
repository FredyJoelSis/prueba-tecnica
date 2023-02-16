const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./suc.controller");
app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/getSuc", controller.getSucursales)

module.exports = app;