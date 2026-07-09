const mysql = require("mysql2");
const {DATABASE_PORT, DATABASE_HOST, DATABASE_USER,  DATABASE_PASSWORD, DATABASE} = require("./config");
console.log("HOST:", process.env.DATABASE_HOST);
console.log("USER:", process.env.DATABASE_USER);
console.log("PASSWORD:", process.env.DATABASE_PASSWORD);
console.log("DB:", process.env.DATABASE);
console.log("PORT:", process.env.DATABASE_PORT);

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