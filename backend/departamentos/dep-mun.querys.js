const depmun = {
    get_dep : 'SELECT * FROM departamento ORDER BY id_departamento ASC',
    post_dep : 'INSERT INTO departamento (descripcion) VALUES ($1)',
    put_dep: 'UPDATE departamento SET descripcion = $1 WHERE id_departamento =$2',
    del_dep: 'DELETE FROM departamento WHERE id_departamento = $1'
}

module.exports ={
    depmun
}