-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 29, 2022 at 10:10 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projet_web_db`
--
CREATE DATABASE IF NOT EXISTS `projet_web_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `projet_web_db`;

-- --------------------------------------------------------

--
-- Table structure for table `objets`
--

CREATE TABLE `objets` (
  `Id` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `zoom_min` int(11) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `Indice` varchar(1000) DEFAULT NULL,
  `idBloque` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objets`
--

INSERT INTO `objets` (`Id`, `nom`, `longitude`, `latitude`, `zoom_min`, `code`, `Indice`, `idBloque`) VALUES
(1, 'clé', 2.294395469317292, 48.85858186185793, 13, NULL, 'Le premier coffre se situe le long du dragon de dix mille li', NULL),
(2, 'code', 5.781990666503754, 43.95719379024589, 17, 12302, NULL, NULL),
(3, 'coffre_fort', 2.5876641460328806, 48.841309657279105, 12, NULL, 'Le code se situe sur la citadelle d’une ville Jadis capitale d\'un comté florissant, fondée au XIe siècle ', NULL),
(4, 'coffre_rouge', 125.75320770002256, 39.03250076239191, 15, NULL, 'Le dernier coffre se situe sur le nez de George Washington.', 1),
(5, 'coffre_bleu', 116.014252, 40.346544, 15, NULL, 'Le deuxième coffre se situe sur un territoire clos et isolé entre deux anciens dirigeants du pays.', 1),
(6, 'coffre_vert', -103.458567, 43.879665, 15, NULL, NULL, 1),
(7, 'indice_clé', 2.5876641460328806, 48.841309657279105, 13, NULL, 'La clé se situe à côté de ce qui en France est plus grand que la tour eiffel mais infiniment moins lourd.', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `objets`
--
ALTER TABLE `objets`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
