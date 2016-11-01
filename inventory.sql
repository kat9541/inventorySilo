/*
Run this file to insert data 
*/

\c inventory;



INSERT INTO products (name, type, quantity, active)
  VALUES ('WEARABLE1', 'ATHLETIC', 500, 'none');

INSERT INTO parts (partid, type, attribute, description, recamt, price, quantity)
  VALUES (1, 'BAND', 'B', 'Black Body', 500, 20, 1000);

INSERT INTO part_orders (partid, quantity, totalcost)
  VALUES (6545, 50, 10.00);

INSERT INTO product_orders (address, quantity)
  VALUES ('1 Golisano Road', 50);

INSERT INTO products_refurb (name, type, quantity)
  VALUES ('Active Black Watch', 'Active', 100);

INSERT INTO parts_requests (partid, type, attribute, description, recamt, seen, response, datesent)
  VALUES (1, 'BAND', 'B', 'Black Body', 500, 'NO', 'PENDING', TIMESTAMP '2011-05-16 15:36:38');

  