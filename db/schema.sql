DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

-- the table below stores information about product categories.
CREATE TABLE category (
  category_id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (category_id)
);

-- stores information about individual products
CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);

-- stores information about the product tags
CREATE TABLE tag (
  id INT NOT NULL AUTO_INCREMENT,
  tag_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- represents the many-to-many relationship between products and tags
CREATE TABLE product_tag (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  tag_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES product(id),
  FOREIGN KEY (tag_id) REFERENCES tag(id)
);

