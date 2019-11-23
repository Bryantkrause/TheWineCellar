module.exports = require('mysql2')
  .createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Wine_Cellar_db'
  })
