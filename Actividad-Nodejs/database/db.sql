--CREATE DATABASE
CREATE DATABASE candy_store;

use candy_store;

CREATE TABLE candies(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    expiration DATE NOT NULL,
    isSalad TINYINT NOT NULL,
    date_registered DATETIME NOT NULL,
    date_created DATETIME NOT NULL,
    status INT
);

SHOW TABLE;

describe candies;