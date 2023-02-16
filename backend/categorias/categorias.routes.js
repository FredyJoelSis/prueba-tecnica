const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./categorias.controller");
app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/getProductos", controller.getProductos);

app.post("/insertProductos", controller.insertProductos);

app.put("/updateProductosId/:id", controller.updateProductos);

app.delete("/deleteProductos/:id", controller.deleteProductos);

module.exports = app;
