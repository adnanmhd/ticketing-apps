-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 17, 2021 at 08:32 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketing_apps`
--

-- --------------------------------------------------------

--
-- Table structure for table `ticketing`
--

CREATE TABLE `ticketing` (
  `id` varchar(50) NOT NULL,
  `ticket_number` varchar(10) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `message` varchar(250) NOT NULL,
  `status` varchar(15) NOT NULL,
  `priority` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ticketing`
--

INSERT INTO `ticketing` (`id`, `ticket_number`, `subject`, `message`, `status`, `priority`) VALUES
('61442bfe16c02', '26698', 'Komplain', 'Penanganan Komplain Jaringan 2', 'Open', 'Low'),
('614435c66751a', '21360', 'Bug fixing', 'Penanganan issue production', 'Closed', 'High'),
('614435f5195ea', '49417', 'Komplain', 'Hallo, ticket ini sedang diproses', 'Answered', 'High');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ticketing`
--
ALTER TABLE `ticketing`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
