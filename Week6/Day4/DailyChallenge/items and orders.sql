-- Database: dc-day4-week6
CREATE TABLE product_orders (
	order_id SERIAL PRIMARY KEY,
	amount_of_item SMALLINT NOT NULL
-- 	item_fk_id INTEGER REFERENCES items (item_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	user_id INTEGER REFERENCES users (user_id)  ON DELETE CASCADE ON UPDATE CASCADE,
-- 	customer_name VARCHAR(150) NOT NULL
);

ALTER TABLE product_orders 
ADD COLUMN item_fk_id INTEGER REFERENCES items (item_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE product_orders 
ADD COLUMN user_fk_id INTEGER REFERENCES users (user_id)  ON DELETE CASCADE ON UPDATE CASCADE;


CREATE TABLE items (	
	item_id SERIAL PRIMARY KEY,
	price DECIMAL(1000, 2) NOT NULL,		--1000 so that it's not limited a certain length (it is but a very large number) so I can set the scale (number of digits right of the decimal point) = 2
	item_name VARCHAR(100) NOT NULL,
	order_fk_id INTEGER REFERENCES product_orders (order_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(150) NOT NULL,
	order_fk_id INTEGER REFERENCES product_orders (order_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO items (price, item_name)
VALUES (100.00, 'Microphone'), (27.99, 'Milk Chocolate'), (20.00, 'Hand Sanitizer'), (42.99, 'Toilet Paper');

INSERT INTO product_orders (amount_of_item, item_fk_id) 
VALUES (4, (SELECT item_id FROM items WHERE item_name = 'Milk Chocolate')), (10, (SELECT item_id FROM items WHERE item_name = 'Microphone')), (2, (SELECT item_id FROM items WHERE item_name = 'Toiler Paper'))

UPDATE product_orders
SET item_fk_id = (SELECT item_id FROM items WHERE item_name = 'Toilet Paper')
WHERE order_id = 3

INSERT INTO users (user_name) 
VALUES ('Steve'), ('Amy'), ('Maria'), ('Elisabeth'), ('Alexa');

UPDATE users 
SET order_fk_id = (SELECT order_id FROM product_orders WHERE amount_of_item = 10)
WHERE user_name = 'Steve'

UPDATE users 
SET order_fk_id = (SELECT order_id FROM product_orders WHERE amount_of_item = 4)
WHERE user_name = 'Amy'

UPDATE users 
SET order_fk_id = (SELECT order_id FROM product_orders WHERE amount_of_item = 2)
WHERE user_name = 'Maria'

UPDATE product_orders
SET user_fk_id = (SELECT user_id FROM users WHERE order_fk_id = product_orders.order_id)


CREATE FUNCTION getTotalPrice (given_user_name VARCHAR(50))
RETURNS DECIMAL(1000, 2) AS $$
DECLARE 
	total_price DECIMAL(1000, 2);
BEGIN 
	SELECT (product_orders.amount_of_item * items.price) INTO total_price
	FROM users
	INNER JOIN product_orders
	ON users.order_fk_id = product_orders.order_id
	INNER JOIN items
	ON product_orders.item_fk_id = items.item_id
	WHERE user_name = given_user_name;
	RETURN total_price;
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION getTotalPrice

SELECT getTotalPrice('Steve');
SELECT getTotalPrice('Amy');
SELECT getTotalPrice('Maria');
SELECT getTotalPrice('Elisabeth');


	
	
	