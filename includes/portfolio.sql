-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 04, 2020 at 03:58 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `about` text NOT NULL,
  `image` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `name`, `about`, `image`) VALUES
(1, 'Music Mixer', 'This project depicts the drag and drop, mix and match, mashup, songs to enjoy the music of your own. UI/UX was taken under consideration and it was designed as DJ pad controller to drive user through the steps. One can add up-to 4 songs and all songs get played together; however, when you reset using button, the site gets reload and set back the default landing page. The fun part is you just have to drag the music and drop on the DJ disc and the song gets roll. All four songs are of different types, where it gets mix and produces new melody every time you add or remove songs. \r\n\r\nSoftware Used: Illustrator, Photoshop, Premier Pro and Visual Studio.\r\n\r\nLanguages used for coding: HTML, CSS, JavaScript.', 'MusicMixer.png'),
(2, '3D Card Effect', 'This is a super cool 3D effect made using mouse events and JavaScript. A shoe advertisement is designed and code using modern techniques. When the user hover over the template it gives a feel of 3D because all the content including image moves with the mouse events. Moreover, the animation is added from JavaScript. As soon as the mouse moves out from the template, things fall back to default state. This example demonstrates what JavaScript can handle in terms of animations.\r\n\r\nSoftware used: Photoshop, Adobe XD, Visual Studio.\r\n\r\nLanguages used to code: HTML, CSS, JavaScript.', '3Dcard.png'),
(3, 'Kleenex Beer ', 'Content is a way of marketing your brand loyalty and sell products, services and expertise by creating and sharing information that\'s relevant and useful to target audience. This was the project where we created our own brand of beer by mixing Kleenex wet wipes and Coors light beer. This sounds very exciting and trust me it is! We had strong brand story and content to launch our product. However, this was just a project of reel world. We researched on everything we could to make our product stand different in the market. But we had condition that we should only use content from Coors light beer and implement it in Kleenex Wet wipes product. And that\'s how to named it \"Kleenex Beer\".\r\n\r\n\"STUBBORNLY COMMITTED TO QUALITY, WE WILL ALWAYS BREW KLEENEX TO BE A SESSIONABLE, FULL FLAVOURED AND PREMIUM GOLDEN LAGER.\"', 'Kleenex.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
