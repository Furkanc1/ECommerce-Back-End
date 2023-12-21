DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- the table below stores information about product categories.
CREATE TABLE category (
  category_id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (category_id)
);

INSERT INTO category (category_name) VALUES
  ('Toys'),
  ('Books'),
  ('Clothes');

-- -- selects all rows from the category table
-- SELECT * FROM category;

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

INSERT INTO product (product_name, price, stock, category_id) VALUES
  ('He-Man Figurine', 12.99, 5, 1),
  ('The Giver', 8.97, 10, 2),
  ('Sweater', 16.99, 8, 3);

-- -- selects all rows from the product table
-- SELECT * FROM product;

-- stores information about the product tags
CREATE TABLE tag (
  id INT NOT NULL AUTO_INCREMENT,
  tag_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO tag (tag_name) VALUES
  ('ComicBook-Character'),
  ('Fictional'),
  ('Comfy');

-- -- selects all rows from the tag table
-- SELECT * FROM tag;

-- represents the many-to-many relationship between products and tags
CREATE TABLE product_tag (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  tag_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES product(id),
  FOREIGN KEY (tag_id) REFERENCES tag(id)
);

INSERT INTO product_tag (product_id, tag_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3);

-- -- selects all rows from the product_tag table
-- SELECT * FROM product_tag;
