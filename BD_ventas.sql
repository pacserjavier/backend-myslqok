-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2026 a las 03:32:10
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_ventas`
--
DROP DATABASE IF EXISTS `bd_ventas`;
CREATE DATABASE IF NOT EXISTS `bd_ventas` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_ventas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `stock`, `categoria`, `estado`, `fecha_registro`) VALUES
(1, 'Laptop HP', 'Laptop HP Core i5 16GB RAM', 2800.00, 15, 'Computo', 1, '2026-06-14 20:14:40'),
(2, 'Mouse Logitech', 'Mouse inalámbrico', 85.50, 50, 'Accesorios', 1, '2026-06-14 20:14:40'),
(3, 'Teclado Mecánico', 'Teclado RGB para gaming', 250.00, 20, 'Accesorios', 1, '2026-06-14 20:14:40'),
(4, 'Monitor Samsung 24\"', 'Monitor Full HD', 750.00, 12, 'Monitores', 1, '2026-06-14 20:14:40'),
(5, 'Impresora Epson', 'Impresora multifuncional', 950.00, 8, 'Impresoras', 1, '2026-06-14 20:14:40'),
(6, 'Disco SSD 1TB', 'Unidad de almacenamiento SSD', 420.00, 30, 'Almacenamiento', 1, '2026-06-14 20:14:40'),
(7, 'Memoria USB 64GB', 'USB 3.0 de alta velocidad', 45.00, 100, 'Almacenamiento', 1, '2026-06-14 20:14:40'),
(8, 'Auriculares Bluetooth', 'Auriculares inalámbricos', 180.00, 25, 'Audio', 1, '2026-06-14 20:14:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` enum('Administrador','Vendedor') NOT NULL,
  `estado` tinyint(1) DEFAULT 1,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `usuario`, `correo`, `password`, `rol`, `estado`, `fecha_registro`) VALUES
(1, 'Juan', 'Perez', 'jperez', 'juan@gmail.com', '$2a$12$hIsJywgjuA97jWvNxxRWU.oIpQa1C6u3qLLpsVu/txJ6A/pqfRDem', 'Administrador', 1, '2026-06-14 20:14:40'),
(2, 'Maria', 'Lopez', 'mlopez', 'maria@gmail.com', '123456', 'Vendedor', 1, '2026-06-14 20:14:40'),
(3, 'Carlos', 'Garcia', 'cgarcia', 'carlos@gmail.com', '123456', 'Vendedor', 1, '2026-06-14 20:14:40'),
(4, 'Ana', 'Torres', 'atorres', 'ana@gmail.com', '123456', 'Vendedor', 1, '2026-06-14 20:14:40'),
(5, 'Luis', 'Rojas', 'lrojas', 'luis@gmail.com', '123456', 'Administrador', 1, '2026-06-14 20:14:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
