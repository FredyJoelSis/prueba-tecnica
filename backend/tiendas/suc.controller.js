const { json } = require('express');
const { pool } = require('../db/dbconfig');
const { sucursales } = require('./suc.querys');

//get sucursales
const getSucursales = (req, res) => {

    pool.query(sucursales.get_suc, (error, results) => {
        if (error) {
            throw error
        }
       return res.status(200).json(results.rows)
    })
}

module.exports ={
    getSucursales
}