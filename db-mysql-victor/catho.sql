-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 02-Maio-2019 às 21:24
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- CREATE DATABASE "catho" ---------------------------------
CREATE DATABASE IF NOT EXISTS `catho` CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `catho`;
-- ---------------------------------------------------------
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clients`
--

CREATE TABLE `clients` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clients`
--

INSERT INTO `clients` (`id`, `name`) VALUES
(1, 'Apple'),
(2, 'Unilever'),
(3, 'Nike'),
(4, 'Ford'),
(5, 'Default');

-- --------------------------------------------------------

--
-- Estrutura da tabela `client_order`
--

CREATE TABLE `client_order` (
  `id` int(255) NOT NULL,
  `client` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `client_order`
--

INSERT INTO `client_order` (`id`, `client`, `password`) VALUES
(1, 'root', '1234'),
(2, 'pedro', '4321');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` float(12,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `price`) VALUES
(1, 'Classic', 270),
(2, 'Standout', 323),
(3, 'Premium', 395);

-- --------------------------------------------------------

--
-- Estrutura da tabela `rules`
--

CREATE TABLE `rules` (
  `id` int(255) NOT NULL,
  `client` int(255) NOT NULL,
  `prefix` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `param` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `rules`
--

INSERT INTO `rules` (`id`, `client`, `prefix`, `description`, `param`) VALUES
(1, 3, 'QUANTITY_DISCOUNT', 'Gets a discount on Premium Ads where 4 or more are purchased. The price drops to $379.99 per ad', '{\"value\":379.99, \"product\": \"Premium\", \"q\": 4}'),
(2, 1, 'DISCOUNT', 'Gets a discount on Standout Ads where the price drops to $299.pp per ad', '{\"value\": 299.99, \"product\": \"Standout\"}'),
(3, 2, 'TAKE_MORE_PAY', 'Gets a for 3 for 2 deal on Classic Ads', '{\"take\": 2, \"free\": 1, \"product\": 1}'),
(4, 4, 'TAKE_MORE_PAY', 'Gets a 5 for 4 deal on Classic Ads', '{\"take\": 4, \"free\": 2, \"product\": 1}'),
(5, 4, 'DISCOUNT', 'Gets a discount on Standout Ads where the price drops to $309.99 per ad', '{\"value\": 309.99, \"product\": \"Standout\"}'),
(6, 4, 'QUANTITY_DISCOUNT', 'Gets a discount on Premium Ads when 3 or more are purchased. The price drops to $389.99 per ad', '{\"value\": 389.99, \"product\": \"Premium\", \"q\": 3 }');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_order`
--
ALTER TABLE `client_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rules`
--
ALTER TABLE `rules`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `client_order`
--
ALTER TABLE `client_order`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rules`
--
ALTER TABLE `rules`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
