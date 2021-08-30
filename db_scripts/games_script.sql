CREATE SCHEMA `games` ;
-- Creacion de tablas

CREATE TABLE `games`.`users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `games`.`genre` (
  `idgenre` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NULL,
  PRIMARY KEY (`idgenre`),
  UNIQUE INDEX `idgames_UNIQUE` (`idgenre` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE);

CREATE TABLE `games`.`saga` (
  `idsaga` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idsaga`));

CREATE TABLE `games`.`games` (
  `idgames` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `idgenre` INT NOT NULL,
  `idsaga` INT NOT NULL,
  `duration_hour` INT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idgames`),
  UNIQUE INDEX `idgames_UNIQUE` (`idgames` ASC) VISIBLE,
  INDEX `genre_idx` (`idgenre` ASC) VISIBLE,
  INDEX `saga_idx` (`idsaga` ASC) VISIBLE,
  CONSTRAINT `genre`
    FOREIGN KEY (`idgenre`)
    REFERENCES `games`.`genre` (`idgenre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `saga`
    FOREIGN KEY (`idsaga`)
    REFERENCES `games`.`saga` (`idsaga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Insert de Generos
INSERT INTO `games`.`genre` (`name`) VALUES ('Terror');
INSERT INTO `games`.`genre` (`name`) VALUES ('Aventura');
INSERT INTO `games`.`genre` (`name`) VALUES ('Accion');
INSERT INTO `games`.`genre` (`name`) VALUES ('Casual');
INSERT INTO `games`.`genre` (`name`) VALUES ('Deportes');
INSERT INTO `games`.`genre` (`name`) VALUES ('Carreras');
INSERT INTO `games`.`genre` (`name`) VALUES ('Rol');

-- Insert de sagas
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('1', 'Resident Evil');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('2', 'FIFA');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('3', 'The Witcher');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('4', 'Dead By Daylight');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('5', 'Little Nightmares');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('6', 'Among Us');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('7', 'Age of Empires');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('8', 'Outlast');
INSERT INTO `games`.`saga` (`idsaga`, `name`) VALUES ('9', 'Borderlands');

-- insert de users
INSERT INTO `games`.`users` (`name`) VALUES ('Ana');
INSERT INTO `games`.`users` (`name`) VALUES ('Joaquin');
INSERT INTO `games`.`users` (`name`) VALUES ('Melany');
INSERT INTO `games`.`users` (`name`) VALUES ('Nicole');

