const conn = require("../db");

class Usuario {
  static buscarPorEmail(email, callback) {
    const sql = "SELECT * FROM usuarios WHERE correo = ?";
    conn.query(sql, [email], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]);
    });
  }
}

module.exports = Usuario;