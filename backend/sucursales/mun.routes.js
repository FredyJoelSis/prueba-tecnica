const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./mun.controller");
app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/getMun', controller.getMunicipios);
app.post('/postMun', controller.insertMunicipios);
app.put('/upMun/:id', controller.updateMunicipios);
app.delete('/delMun/:id', controller.deleteMunicipios);

module.exports = app;