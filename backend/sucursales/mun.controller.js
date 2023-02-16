const { json } = require('express');
const { pool } = require('../db/dbconfig');
const { municipios } = require('./mun.querys');

//get municipios
const getMunicipios = (req, res) =>{
    pool.query(municipios.get_mun, (error, results) =>{
        if (error){
            throw error
        }
        return res.status(200).json(results.rows)
    })
}

//post municipios
const insertMunicipios = (req, res) =>{
    const {id_departamento, descripcion} = req.body
    console.log(req.body)

    if(id_departamento != '' && descripcion != ''){
        pool.query(municipios.post_mun, [id_departamento, descripcion], (error, results) =>{
            if (error){
                throw error
            }
        })
    }else{
        res.json({id:0, mensaje: "Complete los campos"})
    }
    results = res.status(200).send(`OK`)
}

//up municipios
const updateMunicipios = (req, res) => {
    const id = parseInt(req.params.id);
    const { id_departamento, descripcion } = req.body;
  
    pool.query(
      municipios.up_mun, [id_departamento, descripcion, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        results = res.status(200).send(`Municipio modificado`);
      }
    );
  };

//del municipios
const deleteMunicipios = (req, res) => {
    const id = req.params.id;
  
    pool.query(
      municipios.del_mun, [id], (error, results) => {
        if (error) {
          throw error
        }
       res.status(200).send('Eliminado correctamente')
      }
    )
  }

module.exports = {
    getMunicipios,
    insertMunicipios,
    updateMunicipios,
    deleteMunicipios
}