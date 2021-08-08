CREATE SCHEMA `hospital` ;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO `hospital`.`users` (`name`) VALUES ('Ana');
INSERT INTO `hospital`.`users` (`name`) VALUES ('Joaquin');
INSERT INTO `hospital`.`users` (`name`) VALUES ('Melany');
INSERT INTO `hospital`.`users` (`name`) VALUES ('Nicole');
