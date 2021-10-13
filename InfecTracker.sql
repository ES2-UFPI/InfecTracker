-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.6.4-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para infectracker
CREATE DATABASE IF NOT EXISTS `infectracker` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `infectracker`;

-- Copiando estrutura para tabela infectracker.notificação
CREATE TABLE IF NOT EXISTS `notificação` (
  `LoginUsuario` varchar(20) DEFAULT NULL,
  `Latitude` double DEFAULT NULL,
  `Longitude` double DEFAULT NULL,
  `Hora Notificação` time DEFAULT NULL,
  `DataNotificacao` date DEFAULT NULL,
  `Nome da Doença` varchar(50) DEFAULT NULL,
  KEY `Login` (`LoginUsuario`),
  CONSTRAINT `Login` FOREIGN KEY (`LoginUsuario`) REFERENCES `usuário` (`Login`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Armazena as notificações de infecção.';

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela infectracker.usuário
CREATE TABLE IF NOT EXISTS `usuário` (
  `Login` varchar(20) NOT NULL,
  `Senha` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Celular` varchar(20) NOT NULL,
  PRIMARY KEY (`Login`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Armazena Informações dos Usuários';

-- Exportação de dados foi desmarcado.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
