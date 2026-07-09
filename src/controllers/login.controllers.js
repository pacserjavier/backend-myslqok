const Usuario = require("../../models/usuariosModel");
const bcrypt = require("bcrypt");

mostrarLogin = (req, res) => {
  res.render("viewlogin/login");
};

login = (req, res) => {
  const { email, password } = req.body;

  Usuario.buscarPorEmail(email, (err, usuario) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error en el servidor");
    }
    if (!usuario) {
      return res.render("viewlogin/login", { error: "Usuario no encontrado" });
    }

    // Comparar contraseña encriptada
    bcrypt.compare(password, usuario.password, (err, coincide) => {
      if (coincide) {
        req.session.usuario = usuario; // Guardamos en sesión
        res.redirect("/dashboard");
      } else {
        res.render("viewlogin/login", { error: "Contraseña incorrecta" });
      }
    });
  });
};

logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

module.exports = { mostrarLogin, login, logout };