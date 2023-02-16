const municipios ={
    get_mun : 'SELECT * FROM municipio ORDER BY id_municipio ASC',
    post_mun : 'INSERT INTO municipio (id_departamento, descripcion) VALUES ($1, $2)',
    up_mun : 'UPDATE municipio SET id_departamento =$1, descripcion =$2 WHERE id_municipio = $3',
    del_mun : 'DELETE FROM municipio WHERE id_municipio =$1'
}

module.exports ={
    municipios
}