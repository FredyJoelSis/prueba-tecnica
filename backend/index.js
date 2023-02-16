const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');
const categorias = require('./categorias/categorias.routes');
const departamentos = require('./departamentos/dep-mun.routes');
const municipios  = require('./sucursales/mun.routes');
const suc  = require('./tiendas/suc.routes');
app = express();

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors());

app.listen(port, ()=>{
    console.log(`Servidor escuchando en el puerto: ${port}`);
})

app.get('/api', (req, res) =>{
    res.send('api iniciada correctamente');
})

app.use(categorias)
app.use(departamentos)
app.use(municipios)
app.use(suc)

