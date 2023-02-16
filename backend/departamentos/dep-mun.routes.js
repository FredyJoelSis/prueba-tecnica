const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./dep-mun.controller");
app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/getDepartamentos', controller.getDepartamentos)

app.post('/insertDepartamentos', controller.insertDepartamentos)

app.put('/upDepartamentos/:id', controller.putDepartamentos)

app.delete('/delDepartamentos/:id', controller.delDepartamentos)

module.exports = app;