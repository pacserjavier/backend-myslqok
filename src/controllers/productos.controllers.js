// importamos el modulo path
const path = require("path");
// importamos el modelo productos
const Producto = require("../../models/productoModel");
// importamos el middleware del autenticacion
const authMiddleware = require("../../middlewares/authMiddlewares");
// Declaro mi funcion en una variable
listar = (req, res) => {
    // Listar todos los productos
    Producto.listar((err, productos) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al obtener productos");
      return;
    }
    res.render("viewproductos/productos", { productos });

})};

// Mostrar formulario para agregar producto
mostrarFormularioAgregar = (req, res) => {
  res.render("viewproductos/agregar"); // vista agregar.ejs
};

// Guardar producto nuevo
guardar = (req, res) => {
  const data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    stock: req.body.stock,
    categoria: req.body.categoria,
    estado: req.body.estado
  };

  Producto.guardar(data, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al guardar producto");
      return;
    }
    res.redirect("/productos");
  });
};

// Mostrar formulario de edición
mostrarFormularioEditar = (req, res) => {
  const id = req.params.id;
  Producto.buscarPorId(id, (err, producto) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al buscar producto");
      return;
    }
    res.render("viewproductos/editar", { producto }); // vista editar.ejs
  });
};

// Editar producto
editar = (req, res) => {
  const id = req.params.id;
  const data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    stock: req.body.stock,
    categoria: req.body.categoria,
    estado: req.body.estado
  };

  Producto.editar(id, data, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al editar producto");
      return;
    }
    res.redirect("/productos");
  });
};

// Eliminar producto
eliminar = (req, res) => {
  const id = req.params.id;
  Producto.eliminar(id, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al eliminar producto");
      return;
    }
    res.redirect("/productos");
  });
};

module.exports = {
  listar,
  mostrarFormularioAgregar,
  guardar,
  mostrarFormularioEditar,
  editar,
  eliminar
};