-- Database: public

CREATE TABLE items (
	item_id SERIAL PRIMARY KEY,
	item VARCHAR(50) NOT NULL,
	price INTEGER NOT NULL;
)

CREATE TABLE customers (
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL;
)


SELECT * FROM customers;

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
	
-- Use SQL to fetch the following data from the database:
-- All the items.
SELECT * FROM items; 

-- All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price > 80

-- All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers WHERE last_name = 'Smith'
-- outcome : nothing, as there is no customer with the last name 'Smith'

-- All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name = 'Jones'

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE first_name != 'Scott'
