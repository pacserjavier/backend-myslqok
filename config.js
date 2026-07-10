const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT
const DATABASE_HOST = process.env.DATABASE_HOST
const DATABASE_USER = process.env.DATABASE_USER
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE = process.env.DATABASE
const DATABASE_PORT = process.env.DATABASE_PORT
const DATABASE_hola = process.env.DATABASE_PORT


module.exports = {
    PORT,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE,
    DATABASE_PORT
};