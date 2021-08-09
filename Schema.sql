DROP DATABASE IF EXISTS productsDetails;

CREATE DATABASE productsDetails;

USE productsDetails;

CREATE TABLE feature (
  product_id INT NOT NULL,
  feature VARCHAR(240) NULL,
  value DECIMAL(10,2) NULL,

  PRIMARY KEY (product_id)
  );

CREATE TABLE styles (
  product_id INT NOT NULL,
  campus VARCHAR(7),
  name VARCHAR(50),
  slogan VARCHAR(240),
  description VARCHAR(540),

  PRIMARY KEY (product_id)
  );

CREATE TABLE products (
  product_id INT NOT NULL,
  campus VARCHAR(7),
  name VARCHAR(50),
  slogan VARCHAR(240),
  description VARCHAR(540),
  category TEXT(50),
  default_price VARCHAR(7),

  PRIMARY KEY (product_id)
      ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE photos (
  product_id INT NOT NULL,
  thumbnail_url VARCHAR(150),
  url VARCHAR(150),

  PRIMARY KEY (product_id)
  );

CREATE TABLE skus (
  product_id INT NOT NULL,
  sku INT(5),
  url VARCHAR(150),

  PRIMARY KEY (product_id)
  );

CREATE TABLE related (
  product_id INT NOT NULL,
  related_item INT(5),

  PRIMARY KEY (product_id)
  );
/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root -p < schema.sql
*/