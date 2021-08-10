DROP DATABASE IF EXISTS productsDetails;

CREATE DATABASE productsDetails;

USE productsDetails;
DROP DATABASE IF EXISTS productsDetails;

CREATE DATABASE productsDetails;

USE productsDetails;

-- ---
-- Globals
-- ---

-- ---
-- Table 'Features'
--
-- ---
CREATE TABLE Features (
  product_id INT NOT NULL,
  feature VARCHAR ( 50 ),
  value VARCHAR ( 120 ),
  PRIMARY KEY ( product_id )
);

-- ---
-- Table 'Product Info'
--
-- ---

CREATE TABLE ProductInfo (
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
  product_id INT NOT NULL,
  style_id INT  NOT NULL,
  name VARCHAR(50),
  original_price VARCHAR(7),
  sale_price VARCHAR(7),
  isdefault boolean,
  PRIMARY KEY (product_id)
);

-- ---
-- Table 'related_products'
--
-- ---

CREATE TABLE related_products (
  product_id INT NOT NULL,
  related_id INT NOT NULL,
  PRIMARY KEY (product_id)
);

-- ---
-- Table 'photos'
--
-- ---

-- CREATE TABLE photos (
--   product_id INT NOT NULL,
--   thumbnail_url MEDIUMTEXT NULL DEFAULT NULL,
--   url MEDIUMTEXT NULL DEFAULT NULL,
--   PRIMARY KEY (product_id)
-- );

-- ---
-- Table 'skus'
--
-- ---

CREATE TABLE skus (
  product_id INT NOT NULL,
  sku_id VARCHAR(10) NOT NULL,
  quantity INT NOT NULL,
  size VARCHAR(10) NOT NULL,
  PRIMARY KEY (product_id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE ProductInfo ADD FOREIGN KEY (product_id) REFERENCES Features (product_id);
ALTER TABLE styles ADD FOREIGN KEY (product_id) REFERENCES Product Info (product_id);
ALTER TABLE styles ADD FOREIGN KEY (product_id) REFERENCES skus (product_id);


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

