// importando la libreria Express
const express = require("express");
// variable para la ruta
const router = express.Router();

const controller = require("../controllers/productos.controllers");

// la ruta de los listar productos
router.get("/productos", controller.listar);
// la ruta del formulario agregar producto
router.get("/productos/agregar", controller.mostrarFormularioAgregar);
//la ruta de guardar producto
router.post("/productos/agregar", controller.guardar);
//la ruta de formulario editar productos
router.get("/productos/editar/:id", controller.mostrarFormularioEditar);
// La ruta para actualizar un producto
router.post("/productos/editar/:id", controller.editar);
// La ruta para eliminar un producto
router.get("/productos/eliminar/:id", controller.eliminar);

module.exports = router;