// importar Express
const express = require("express");
const session = require("express-session");
const authMiddleware = require("./middlewares/authMiddlewares");
const {PORT} = require("./config");
// importar Mysql
const mysql = require("mysql2");
// crear instancia para nuestra aplicacion
const app = express();
// importar dotenv
const dotenv = require("dotenv");
dotenv.config();
// Middleware para procesar datos de formularios
app.use(express.urlencoded({ extended: true }));
// para leer Json
app.use(express.json());

// Configuración de sesiones 
app.use(session({
  secret: "mi_secreto_seguro", //Es una cadena usada para firmar el ID de la sesión (el cookie que se guarda en el navegador).
  resave: false, // true, la sesión se guarda en el store (memoria o base de datos) en cada petición, aunque no haya cambios.
  saveUninitialized: false //solo se guarda cuando realmente agregas algo (ej. req.session.usuario).
}));

//declarar la carpeta public como publica
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//declarar views (vistas dinamicas)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// primer msg de Node - 1 ruta incial
const loginRouter = require("./src/routers/login.router");
app.use(loginRouter);

// ruta de productos
const prodRouter = require("./src/routers/productos.router");
const { error } = require("console");
app.use(prodRouter);

// Rutas protegida
app.get("/dashboard", authMiddleware ,(req, res) => {
  if (!req.session.usuario) {
    return res.redirect("/");
  }
  res.render("viewlogin/dashboard", { usuario: req.session.usuario });
});

const conn = require("./db");

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)

})

        