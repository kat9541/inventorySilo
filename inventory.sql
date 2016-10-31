CREATE ROLE admin PASSWORD 'a' SUPERUSER CREATEDB CREATEROLE INHERIT LOGIN;


\c inventory;



INSERT INTO products (name, type, quantity, active)
  VALUES ('WEARABLE1', 'ATHLETIC', 500, "none");

INSERT INTO parts (name, quantity, cost, recamt)
  VALUES ('PHILLIPS', 50, 5.99, 50);

INSERT INTO part_orders (partid, quantity, totalcost)
  VALUES (6545, 50, 10.00);

INSERT INTO product_orders (address, quantity)
  VALUES ('1 Golisano Road', 50);

INSERT INTO products_refurb (name, type, quantity)
  VALUES ('Active Black Watch', 'Active', 100);

INSERT INTO parts_requests (datesent, seen, response)
  VALUES (TIMESTAMP '2011-05-16 15:36:38', 'Not Seen', 'We got some bro');

