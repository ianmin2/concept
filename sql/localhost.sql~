-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 01, 2015 at 05:02 AM
-- Server version: 5.5.41-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `traffic`
--
DROP DATABASE `traffic`;
CREATE DATABASE IF NOT EXISTS `traffic` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `traffic`;

-- --------------------------------------------------------

--
-- Table structure for table `driver_history`
--

DROP TABLE IF EXISTS `driver_history`;
CREATE TABLE IF NOT EXISTS `driver_history` (
`id` bigint(20) NOT NULL,
  `driver_id` bigint(255) NOT NULL,
  `event_date` datetime NOT NULL,
  `officer_id` bigint(255) NOT NULL,
  `officer_comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='THE DRIVER HISTORY TABLE' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

DROP TABLE IF EXISTS `drivers`;
CREATE TABLE IF NOT EXISTS `drivers` (
`id` int(255) NOT NULL,
  `licence_number` varchar(50) NOT NULL,
  `licence_owner` varchar(255) NOT NULL,
  `owner_id` varchar(30) NOT NULL,
  `licence_class` varchar(10) NOT NULL,
  `licence_year` date NOT NULL,
  `licence_expiry` date NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='THE BASIC LICENCE REGISTRATION TABLE' AUTO_INCREMENT=37 ;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `licence_number`, `licence_owner`, `owner_id`, `licence_class`, `licence_year`, `licence_expiry`) VALUES
(1, '534543543', '4325345', '435435435', '43534543', '0000-00-00', '0000-00-00'),
(4, '5235435345', 'Ian Innocent', '214658437435', 'BCE', '2014-02-28', '0000-00-00'),
(5, '5235435343', 'Emmanuel Chifamba', '214658437437', 'BCE', '2014-02-28', '2015-02-28'),
(6, '5235435323', 'Enock Tumwiine', '2146584374343', 'BCE', '2014-02-28', '0000-00-00'),
(7, '21323', '123', '23213', '3213', '0000-00-00', '0000-00-00'),
(8, 'wefrewf', 'erew', 'wqefrew', 'ewrwet', '0000-00-00', '0000-00-00'),
(9, 'rgerg', 'dsgr', 'gergtr', 'rtret', '0000-00-00', '0000-00-00'),
(16, 'rerwrw', 'wreewrewrew', 'erererewrew', 'ewr', '0000-00-00', '0000-00-00'),
(24, '"#add_licence_history"', '"#add_licence_history"', '"#add_licence_history"', '"#add_lice', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `licence_history`
--

DROP TABLE IF EXISTS `licence_history`;
CREATE TABLE IF NOT EXISTS `licence_history` (
`id` int(11) NOT NULL,
  `driver_data` int(11) NOT NULL,
  `renewal_date` int(11) NOT NULL,
  `expiry_date` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
`id` bigint(20) NOT NULL,
  `sender` varchar(255) NOT NULL,
  `target` varchar(255) NOT NULL,
  `send_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `officers`
--

DROP TABLE IF EXISTS `officers`;
CREATE TABLE IF NOT EXISTS `officers` (
`id` bigint(20) NOT NULL,
  `officer_name` varchar(75) NOT NULL,
  `officer_id` varchar(75) NOT NULL,
  `officer_password` text NOT NULL,
  `officer_email` varchar(30) NOT NULL,
  `officer_telephone` int(10) NOT NULL,
  `officer_station` bigint(255) NOT NULL,
  `actif` int(1) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `officers`
--

INSERT INTO `officers` (`id`, `officer_name`, `officer_id`, `officer_password`, `officer_email`, `officer_telephone`, `officer_station`, `actif`) VALUES
(1, 'Ian Mbae', 'hg43t269r34jhpoiu8hjvkgj', '2055160yuif', 'ianmin2@live.com', 2147483647, 1, 1),
(2, 'Emmanuel Chifamba', '13123jhguyg9rt', '', '', 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
CREATE TABLE IF NOT EXISTS `stations` (
`id` int(11) NOT NULL,
  `station_name` varchar(200) NOT NULL,
  `station_id` varchar(100) NOT NULL,
  `station_location` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='THE POLICE STATIONS MAIN TABLE' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `stations`
--

INSERT INTO `stations` (`id`, `station_name`, `station_id`, `station_location`) VALUES
(1, 'ianmin2', 'ianmin2', 'ianmin2');

-- --------------------------------------------------------

--
-- Table structure for table `tickets_history`
--

DROP TABLE IF EXISTS `tickets_history`;
CREATE TABLE IF NOT EXISTS `tickets_history` (
`id` bigint(255) NOT NULL,
  `ticket_id` varchar(75) NOT NULL,
  `ticket_comment` text NOT NULL,
  `ticket_date` date NOT NULL,
  `ticket_amount` varchar(25) NOT NULL,
  `ticket_paid` int(1) NOT NULL,
  `amount` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_history`
--

DROP TABLE IF EXISTS `vehicle_history`;
CREATE TABLE IF NOT EXISTS `vehicle_history` (
`id` bigint(255) NOT NULL,
  `driver_id` bigint(255) NOT NULL,
  `officer_id` bigint(255) NOT NULL,
  `officer_comment` text NOT NULL,
  `event_date` datetime NOT NULL,
  `vehicle_id` bigint(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='THE MAIN VEHICLE HISTORY TABLE' AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_types`
--

DROP TABLE IF EXISTS `vehicle_types`;
CREATE TABLE IF NOT EXISTS `vehicle_types` (
`id` bigint(255) NOT NULL,
  `title` varchar(30) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `vehicle_types`
--

INSERT INTO `vehicle_types` (`id`, `title`) VALUES
(1, 'Passenger Car: 680 - 907 kg'),
(2, 'Passenger Car: 907 - 1134 kg'),
(3, 'Passenger Car: 1134 - 1360 kg'),
(4, 'Passenger Car: 1361 - 1587 kg'),
(5, 'Passenger Car: over 1588 kg'),
(6, 'Sport Utility Vehicles'),
(7, 'Pickup Trucks'),
(8, 'Vans'),
(9, 'Trucks'),
(10, 'Tractors'),
(11, 'Motorcycles');

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE IF NOT EXISTS `vehicles` (
`id` bigint(255) NOT NULL,
  `owner_id` varchar(20) NOT NULL,
  `owner_name` varchar(75) NOT NULL,
  `owner_licence` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `make` varchar(50) NOT NULL,
  `year` int(4) NOT NULL,
  `color` varchar(70) NOT NULL,
  `weight` varchar(25) NOT NULL,
  `chasis_number` varchar(128) NOT NULL,
  `number_plate` varchar(25) NOT NULL,
  `type` bigint(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='THE VEHICLE REGISTRATION TABLE' AUTO_INCREMENT=1 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `driver_history`
--
ALTER TABLE `driver_history`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `licence_number` (`licence_number`), ADD UNIQUE KEY `owner_id` (`owner_id`);

--
-- Indexes for table `licence_history`
--
ALTER TABLE `licence_history`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `officers`
--
ALTER TABLE `officers`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `officer_id` (`officer_id`);

--
-- Indexes for table `stations`
--
ALTER TABLE `stations`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `station_id` (`station_id`);

--
-- Indexes for table `tickets_history`
--
ALTER TABLE `tickets_history`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_history`
--
ALTER TABLE `vehicle_history`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_types`
--
ALTER TABLE `vehicle_types`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `chasis_number` (`chasis_number`), ADD UNIQUE KEY `number_plate` (`number_plate`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `driver_history`
--
ALTER TABLE `driver_history`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
MODIFY `id` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `licence_history`
--
ALTER TABLE `licence_history`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `officers`
--
ALTER TABLE `officers`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `stations`
--
ALTER TABLE `stations`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tickets_history`
--
ALTER TABLE `tickets_history`
MODIFY `id` bigint(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `vehicle_history`
--
ALTER TABLE `vehicle_history`
MODIFY `id` bigint(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `vehicle_types`
--
ALTER TABLE `vehicle_types`
MODIFY `id` bigint(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
MODIFY `id` bigint(255) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
