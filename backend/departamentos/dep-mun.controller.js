const { json } = require('express');
const { pool } = require('../db/dbconfig');
const { depmun } = require('./dep-mun.querys');


//get departamentos
const getDepartamentos = (req, res) => {
    pool.query(depmun.get_dep, (error, results) =>{
        if (error){
            throw error
        }
        return res.status(200).json(results.rows)
    })
}

//post departamentos
const insertDepartamentos = (req, res) => {
    const {descripcion} = req.body
    console.log(req.body)

    if(descripcion != ''){
        pool.query(depmun.post_dep, [descripcion], (error, results) =>{
            if(error){
                throw error
            }
        })
    }else{
        res.json({id:0, mensaje: "Complete los campos"})
    }
    results = res.status(200).send('OK')
}

//actualizar departamentos
const putDepartamentos = (req, res) => {
  const id = parseInt(req.params.id);
  const { descripcion } = req.body;
  console.log(req.body);
  pool.query(depmun.put_dep, [descripcion, id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`departamento modificado`);
  });
};

//eliminar departamentos
const delDepartamentos = (req, res)=>{
    const id = req.params.id;

    pool.query(depmun.del_dep, [id], (error, results) =>{
        if (error){
            throw error
        }
        res.status(200).send('Eliminado correctamente')
    })
}

module.exports = {
    getDepartamentos,
    insertDepartamentos, 
    putDepartamentos,
    delDepartamentos
}