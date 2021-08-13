DROP DATABASE IF EXISTS productdetails;

CREATE DATABASE productsdetails;

USE productsdetails;

-- ---
-- Globals
-- ---

-- ---
-- Table 'Features'
--
-- ---
CREATE TABLE features (
  id SERIAL,
  product_id INT NOT NULL,
  feature VARCHAR ( 50 ),
  value VARCHAR ( 120 )
);

-- ---
-- Table 'Product Info'
--
-- ---

CREATE TABLE productinfo (
  id SERIAL,
  product_id INTEGER,
  name VARCHAR(120),
  slogan VARCHAR(240 ),
  description VARCHAR(540),
  category VARCHAR(50),
  default_price VARCHAR(7),
  PRIMARY KEY (product_id)
);

-- ---
-- Table 'styles'
--
-- ---

CREATE TABLE styles (
  id SERIAL,
  style_id INT NOT NULL,
  product_id INT NOT NULL,
  name VARCHAR(50),
  sale_price VARCHAR(7),
  original_price VARCHAR(10),
  isdefault boolean,
  PRIMARY KEY (id)
);

-- ---
-- Table 'related_products'
--
-- ---

CREATE TABLE related_products (
  id SERIAL,
  product_id INT NOT NULL,
  related_product_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'photos'
--
-- ---

CREATE TABLE photos (
  id SERIAL,
  style_id INT NOT NULL,
  url TEXT,
  thumbnail_url TEXT,
  PRIMARY KEY (id)
);

-- ---
-- Table 'skus'
--
-- ---

CREATE TABLE skus (
  id SERIAL,
  style_id INT NOT NULL,
  size VARCHAR(10) NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);



-- ---
-- Table Properties
-- ---

-- ALTER TABLE Features ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Product Info ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE styles ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE related_products ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE photos ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE skus ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Features (product_id,Feature,value) VALUES
-- ('','','');
-- INSERT INTO Product Info (product_id,name,slogan,description,category,default_price) VALUES
-- ('','','','','','');
-- INSERT INTO styles (product_id,style_id,name,original_price,sale_price,default?) VALUES
-- ('','','','','','');
-- INSERT INTO related_products (product_id,related_id) VALUES
-- ('','');
-- INSERT INTO photos (product_id,thumbnail_url,url) VALUES
-- ('','','');
-- INSERT INTO skus (product_id,sku_id,quantity,size) VALUES
-- ('','','','');

