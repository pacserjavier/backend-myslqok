function authMiddleware(req, res, next) {
  if (!req.session.usuario) {
    return res.redirect("/");
  }
  // Evitar caché en rutas protegidas
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
}

module.exports = authMiddleware;