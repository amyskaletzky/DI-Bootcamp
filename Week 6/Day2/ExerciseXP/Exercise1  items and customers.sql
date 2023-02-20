-- Database: public

CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item VARCHAR(50) NOT NULL,
	price INTEGER NOT NULL
)

CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
)

-- Adding items to the items table
INSERT INTO items (item, price) 
VALUES 
	('Small Desk', 100),
	('Large Desk', 300), 
	('Fan', 80);
	
-- Adding customers to the customers table
INSERT INTO customers (first_name, last_name) 
VALUES 
	('Greg', 'Jones'),
	('Sandra', 'Jones'),
	('Scott', 'Scott'),
	('Trevor', 'Green'),
	('Melanie', 'Johnson');

-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY price ASC

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customers ORDER BY last_name DESC

