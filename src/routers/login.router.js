const express = require("express");
// la variable de la ruta
const router = express.Router();
// traemos al controlador
const controller = require("../controllers/login.controllers");
//indicamos la ruta
router.get("/", controller.mostrarLogin);
router.post("/login", controller.login);
router.get("/logout", controller.logout);
// Exportarmos la ruta
module.exports = router;