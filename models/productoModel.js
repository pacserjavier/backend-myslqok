const conn = require("../db");

class Producto {
    // Listar todos los productos
  static listar(callback) {
    const sql = "SELECT * FROM productos";
    conn.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  // Guardar un nuevo producto
  static guardar(data, callback) {
    const sql = `
      INSERT INTO productos (nombre, descripcion, precio, stock, categoria, estado)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    conn.query(
      sql,
      [data.nombre, data.descripcion, data.precio, data.stock, data.categoria, data.estado],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      }
    );
  }

  // Buscar producto por ID
  static buscarPorId(id, callback) {
    const sql = "SELECT * FROM productos WHERE id_producto = ?";
    conn.query(sql, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result[0]); // devuelve un solo objeto
    });
  }

  // Editar producto por ID
  static editar(id, data, callback) {
    const sql = `
      UPDATE productos 
      SET nombre = ?, descripcion = ?, precio = ?, stock = ?, categoria = ?, estado = ?
      WHERE id_producto = ?
    `;
    conn.query(
      sql,
      [data.nombre, data.descripcion, data.precio, data.stock, data.categoria, data.estado, id],
      (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
      }
    );
  }

  // Eliminar producto por ID
  static eliminar(id, callback) {
    const sql = "DELETE FROM productos WHERE id_producto = ?";
    conn.query(sql, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }
}

module.exports = Producto;