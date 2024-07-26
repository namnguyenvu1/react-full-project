USE react_project;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Cities;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE Cities (
	cities_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cities_name VARCHAR(50),
    cities_rate INT
);

INSERT INTO Cities (cities_id, cities_name, cities_rate) 
VALUES
	(1, 'Austin', 95),
    (2, 'Honolulu', 88),
    (3, 'Perth', 87),
    (4, 'Calgary', 80);