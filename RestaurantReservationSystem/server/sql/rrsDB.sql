-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: rrs_db
-- ------------------------------------------------------
-- Server version	5.7.9-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `adminId` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `emailId` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `phoneNo` int(10) NOT NULL,
  `loginToken` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`adminId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Prashant','Ninawe','psninawe@yahoo.com','qwerty123',1234567890,NULL),(2,'Kartik','Shankarappa','hskartik@gmail.com','qwerty1234',1234567891,NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `custId` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `emailId` varchar(45) DEFAULT NULL,
  `phoneNo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`custId`)
) ENGINE=InnoDB AUTO_INCREMENT=1011 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1001,'Praveen','Salitra','psalitra@gmail.com','1234567890'),(1002,'Kashyap','Mukkamala','kashyap@gmail.com','1234567891'),(1003,'Ankur','Choudha','abcdef@gmail.com','1234567892'),(1004,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890'),(1005,'Benyamin','Tajdin','btajdin@gmail.com','1234567892'),(1006,'Kartik','Shankarappa','abcd@gmail.com','1234567893'),(1007,'Anup','Aparajit','anup@gmail.com','1234567893'),(1009,'Rupa','Shukla','rupa@gmail.com','1234567899'),(1010,'Goutham','Raj','goutham@gmail.com','1234567890');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation_1`
--

DROP TABLE IF EXISTS `reservation_1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservation_1` (
  `confNo` int(11) NOT NULL AUTO_INCREMENT,
  `tableNo` int(11) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `emailId` varchar(45) NOT NULL,
  `phoneNo` varchar(10) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(45) NOT NULL,
  `partySize` int(11) NOT NULL,
  `reservationStatus` varchar(45) NOT NULL,
  PRIMARY KEY (`confNo`,`tableNo`)
) ENGINE=InnoDB AUTO_INCREMENT=100044 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation_1`
--

LOCK TABLES `reservation_1` WRITE;
/*!40000 ALTER TABLE `reservation_1` DISABLE KEYS */;
INSERT INTO `reservation_1` VALUES (100001,1,'Kartik','Hassan','abcd@gmail.com','1234567890','2015-11-22','18:00:00',5,'CONFIRMED'),(100002,2,'Anup','Aparajita','abcde@gmail.com','1234567891','2015-11-22','18:00:00',4,'CONFIRMED'),(100003,3,'Ankur','Choudha','abcdefg@gmail.com','1234567895','2015-11-22','18:00:00',6,'CONFIRMED'),(100010,2,'Hemlata','Nasnolkar','abcdefg@gmail.com','1234567893','2015-11-26','20:00:00',5,'CANCELLED'),(100020,1,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2016-01-15','17:45:00',3,'CONFIRMED'),(100022,3,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-22','18:00:00',7,'CANCELLED'),(100026,5,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-22','18:00:00',7,'CONFIRMED'),(100027,4,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-21','18:00:00',3,'CONFIRMED'),(100028,6,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-22','18:00:00',3,'CONFIRMED'),(100029,7,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-22','18:00:00',3,'CONFIRMED'),(100030,8,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-22','18:00:00',3,'CONFIRMED'),(100031,0,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2015-11-22','18:00:00',2,'WAITING'),(100035,1,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2016-01-08','14:30:00',3,'CONFIRMED'),(100036,1,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2016-01-09','15:30:00',4,'CONFIRMED'),(100037,3,'Nitin','Nasnolkar','nitin.nasnolkar@gmail.com','1234567890','2016-01-22','17:30:00',7,'CONFIRMED'),(100038,1,'Benyamin','Tajdin','btajdin@gmail.com','1234567892','2016-01-11','19:30:00',4,'CONFIRMED'),(100039,1,'Praveen','Salitra','psalitra@gmail.com','1234567893','2016-01-12','20:00:00',3,'CONFIRMED'),(100040,2,'Kashyap','Mukkamala','kashyap@gmail.com','1234567893','2016-01-11','19:30:00',5,'CONFIRMED'),(100042,1,'Rupa','Shukla','rupa@gmail.com','1234567899','2016-01-15','21:00:00',2,'CANCELLED'),(100043,1,'Gouthams','Raj','goutham@gmail.com','1234567890','2016-01-14','20:30:00',4,'CANCELLED');
/*!40000 ALTER TABLE `reservation_1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservationtable`
--

DROP TABLE IF EXISTS `reservationtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservationtable` (
  `tableNo` int(11) NOT NULL,
  `maxOccupancy` int(11) NOT NULL,
  `availability` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`tableNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservationtable`
--

LOCK TABLES `reservationtable` WRITE;
/*!40000 ALTER TABLE `reservationtable` DISABLE KEYS */;
INSERT INTO `reservationtable` VALUES (1,4,1),(2,6,1),(3,8,1),(4,5,1),(5,8,1),(6,8,1),(7,2,1),(8,4,1);
/*!40000 ALTER TABLE `reservationtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant` (
  `restaurantId` int(11) NOT NULL AUTO_INCREMENT,
  `restaurantName` varchar(45) NOT NULL,
  `emailId` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` int(11) NOT NULL,
  `phoneNo` varchar(10) NOT NULL,
  `daysOfOperation` varchar(45) NOT NULL,
  `openingTime` time NOT NULL,
  `closingTime` time NOT NULL,
  PRIMARY KEY (`restaurantId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Chevys Fresh Mex','chevys@gmail.com','1624 Max Way','Fishkill','New York',12524,'1234567890','Mon Tue Wed Thur Fri Sat Sun','11:00:00','23:00:00');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-14 21:51:08
