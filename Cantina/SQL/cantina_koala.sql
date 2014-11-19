-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 20-Nov-2014 às 00:53
-- Versão do servidor: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cantina_koala`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_categoria_produto_ctp`
--

CREATE TABLE IF NOT EXISTS `tbl_categoria_produto_ctp` (
  `ctp_codigo` int(11) NOT NULL,
  `ctp_descricao` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbl_categoria_produto_ctp`
--

INSERT INTO `tbl_categoria_produto_ctp` (`ctp_codigo`, `ctp_descricao`) VALUES
(1, 'Salgados'),
(2, 'Doces'),
(3, 'Bebidas'),
(4, 'Refeições'),
(5, 'Massas'),
(6, 'regionais'),
(13, 'teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_prd_vnd`
--

CREATE TABLE IF NOT EXISTS `tbl_prd_vnd` (
  `prd_codigo` int(11) NOT NULL,
  `vnd_codigo` int(11) NOT NULL,
  `prd_vnd_qtd` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_produto_prd`
--

CREATE TABLE IF NOT EXISTS `tbl_produto_prd` (
  `prd_codigo` int(11) NOT NULL,
  `prd_descricao` varchar(50) NOT NULL,
  `prd_valor` double(10,2) NOT NULL,
  `ctp_codigo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tbl_produto_prd`
--

INSERT INTO `tbl_produto_prd` (`prd_codigo`, `prd_descricao`, `prd_valor`, `ctp_codigo`) VALUES
(1, 'coca-cola', 3.50, 1),
(2, 'pastel', 2.00, 1),
(3, 'coxinha', 3.00, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_venda_vnd`
--

CREATE TABLE IF NOT EXISTS `tbl_venda_vnd` (
  `vnd_codigo` int(11) NOT NULL,
  `vnd_dth_venda` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_categoria_produto_ctp`
--
ALTER TABLE `tbl_categoria_produto_ctp`
 ADD PRIMARY KEY (`ctp_codigo`);

--
-- Indexes for table `tbl_prd_vnd`
--
ALTER TABLE `tbl_prd_vnd`
 ADD PRIMARY KEY (`prd_codigo`,`vnd_codigo`);

--
-- Indexes for table `tbl_produto_prd`
--
ALTER TABLE `tbl_produto_prd`
 ADD PRIMARY KEY (`prd_codigo`);

--
-- Indexes for table `tbl_venda_vnd`
--
ALTER TABLE `tbl_venda_vnd`
 ADD PRIMARY KEY (`vnd_codigo`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
