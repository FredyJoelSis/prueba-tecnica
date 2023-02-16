const { json } = require('express');
const { pool } = require('../db/dbconfig');
const { productos_scripts } = require('./categorias.querys');


//get productos
const getProductos = (req, res) => {

    pool.query(productos_scripts.get_productos, (error, results) => {
        if (error) {
            throw error
        }
       return res.status(200).json(results.rows)
    })
}

//post productos
const insertProductos = (req, res) => {
    const { categoria, descripcion} = req.body
    console.log(req.body)

    if (categoria !== '' && descripcion !== '') {

        pool.query(productos_scripts.insert_productos, [categoria, descripcion], (error, results) => {
            if (error) {
                throw error
            }
        })

    } else {
        res.json({ id: 0, mensaje: "Complete los campos" })
    }
    results = res.status(200).send(`OK`)
}

//metodo put para actualizar todos los campos

const updateProductos = (req, res) => {
  const id = parseInt(req.params.id);
  const { descripcion, categoria } = req.body;

  let fecha_registro = new Date();

  fecha_registro.getTime();

  pool.query(
    empleados_scipts.update_productos, [descripcion, categoria, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      results = res.status(200).send(`producto modificado`);
    }
  );
};

//delete
const deleteProductos = (req, res) => {
    const id = req.params.id;
  
    pool.query(
      productos_scripts.delete_productos, [id], (error, results) => {
        if (error) {
          throw error
        }
       res.status(200).send('Eliminado correctamente')
      }
    )
  }
  

module.exports = {
    getProductos,
    insertProductos,
    updateProductos,
    deleteProductos                                                                                                                                                                                                                                         
}