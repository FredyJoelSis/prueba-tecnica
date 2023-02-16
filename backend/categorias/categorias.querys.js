const productos_scripts = {
    get_productos: 'SELECT * FROM productos ORDER BY id ASC',
    insert_productos: 'INSERT INTO productos (categoria, descripcion) VALUES ($1, $2)',
    update_productos: 'UPDATE productos SET categoria = $1, descripcion = $2 WHERE id = $3',
    delete_productos: 'DELETE FROM productos WHERE id = $1'

}

module.exports = {
    productos_scripts
}