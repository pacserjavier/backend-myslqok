const mysql = require("mysql2");
const {DATABASE_PORT, DATABASE_HOST, DATABASE_USER,  DATABASE_PASSWORD, DATABASE} = require("./config");

const conn = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE,
    port: DATABASE_PORT
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Conectado a MySQL");
});

module.exports = conn;