/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblLoginServerAccounts` (
  `LoginServerID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `AccountName` varchar(30) NOT NULL,
  `AccountPassword` varchar(50) NOT NULL,
  `AccountCreateDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `AccountEmail` varchar(100) NOT NULL,
  `LastLoginDate` datetime NOT NULL,
  `LastIPAddress` varchar(15) NOT NULL,
  PRIMARY KEY (`LoginServerID`,`AccountName`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblServerAdminRegistration` (
  `ServerAdminID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `AccountName` varchar(30) NOT NULL,
  `AccountPassword` varchar(30) NOT NULL,
  `FirstName` varchar(40) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `RegistrationDate` datetime NOT NULL,
  `RegistrationIPAddr` varchar(15) NOT NULL,
  PRIMARY KEY (`ServerAdminID`,`Email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblServerListType` (
  `ServerListTypeID` int(10) unsigned NOT NULL,
  `ServerListTypeDescription` varchar(20) NOT NULL,
  PRIMARY KEY (`ServerListTypeID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblWorldServerRegistration` (
  `ServerID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ServerLongName` varchar(100) NOT NULL,
  `ServerTagDescription` varchar(50) NOT NULL DEFAULT '',
  `ServerShortName` varchar(25) NOT NULL,
  `ServerListTypeID` int(11) NOT NULL,
  `ServerLastLoginDate` datetime DEFAULT NULL,
  `ServerLastIPAddr` varchar(15) DEFAULT NULL,
  `ServerAdminID` int(11) NOT NULL,
  `Note` varchar(300) DEFAULT NULL,
  `ServerTrusted` int(11) DEFAULT NULL,
  PRIMARY KEY (`ServerID`,`ServerLongName`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblaccountaccesslog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(10) unsigned NOT NULL,
  `account_name` varchar(30) NOT NULL,
  `IP` varchar(15) NOT NULL,
  `accessed` bigint(20) unsigned NOT NULL,
  `SQL_Time` timestamp NOT NULL DEFAULT current_timestamp(),
  `reason` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
