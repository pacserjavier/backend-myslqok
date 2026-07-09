const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Conectado a MySQL");
});

module.exports = conn;