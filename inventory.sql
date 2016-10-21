CREATE ROLE admin PASSWORD 'a' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;
DROP DATABASE IF EXISTS inventory;
CREATE DATABASE inventory;

\c inventory;

CREATE TABLE products (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  typeProd VARCHAR,
  status VARCHAR
);

CREATE TABLE parts (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  quantity INTEGER,
  cost DECIMAL
);



INSERT INTO parts (name, quantity, cost)
  VALUES ('PHILLIPS', 50, '5.99');
  
INSERT INTO products (name, typeProd, status)
  VALUES ('WEARABLE1', 'ATHLETIC', 'NEW');
