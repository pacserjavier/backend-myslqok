const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000
const DATABASE_HOST = process.env.DATABASE_HOST || 'localhost'
const DATABASE_USER = process.env.DATABASE_USER || 'root'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''
const DATABASE = process.env.DATABASE || 'bd_ventas'
const DATABASE_PORT = process.env.DATABASE_PORT || 3306


module.exports = {
    PORT,
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE,
    DATABASE_PORT
};