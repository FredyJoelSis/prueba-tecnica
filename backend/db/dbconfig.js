const {Pool} = require('pg')



const pool = new Pool({
    password: 'u0IVWonk4zMToaYTAWCS',
    host: 'containers-us-west-84.railway.app',
    user: 'postgres',
    port: 7258,
    database: 'railway',
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = {
    pool
}