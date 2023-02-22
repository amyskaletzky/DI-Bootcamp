-- Database: dvdrental
SELECT * FROM film

-- Exercise 1
-- Get a list of all film languages.
SELECT * FROM language


-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.

SELECT title, description, name 
FROM language
INNER JOIN film
ON language.language_id = film.language_id

-- Get all languages, even if there are no films in those languages.
SELECT name
FROM language 
LEFT JOIN film
ON language.language_id = film.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
)

SELECT * FROM new_film
INSERT INTO new_film (name) 
VALUES ('Interstellar'), ('Shutter Island'), ('Mamma Mia')


CREATE TABLE customer_review (
	review_id SERIAL PRIMARY KEY NOT NULL,
	film_id INTEGER REFERENCES new_film (id) ON DELETE CASCADE,
	language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE,
	title VARCHAR(50) NOT NULL,
	score INTEGER CHECK (score BETWEEN 1 AND 10),
	review_text TEXT,
	last_update TIMESTAMP DEFAULT NOW()
)


SELECT * FROM new_film
SELECT * FROM customer_review
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES ((SELECT id FROM new_film WHERE name = 'Interstellar'), (SELECT language_id FROM language WHERE name = 'Mandarin'), 'Incredible', 10, 'Makes me cry everytime, a lot of unexpected plot twists and incredible soundtrack, Hans Zimmer is amazing'),
((SELECT id FROM new_film WHERE name = 'Shutter Island'), (SELECT language_id FROM language WHERE name = 'English'), 'Horrifyingly Insane', 8.5, 'Horrifying, gets you to think'),
((SELECT id FROM new_film WHERE name = 'Mamma Mia'), (SELECT language_id FROM language WHERE name = 'French'), 'Super fun', 9, 'A feel good show, perfect for ABBA lovers')

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film 
WHERE name = 'Shutter Island'

-- Exercise 2 : DVD Rental
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE customer_review 
SET language_id = 1
WHERE film_id = 1

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- address_id, it affects the INSERT -> by having to use a query select inside the value

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- it's easy


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT title, rental_rate
FROM film
ORDER BY rental_rate DESC LIMIT 30

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title, description, first_name, last_name
FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
INNER JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE description ILIKE '%sumo wrestler%' AND first_name = 'Penelope' AND last_name = 'Monroe'


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title
FROM film
INNER JOIN film_category
ON film.film_id = film_category.film_id
INNER JOIN category
ON film_category.category_id = category.category_id
WHERE name = 'Documentary' AND rating = 'R' AND length < 60


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer
ON rental.customer_id = customer.customer_id
WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND rental_rate > 4.00 AND DATE(return_date) BETWEEN '2005-07-28' AND '2005-07-31'



-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT title
FROM film
INNER JOIN inventory
ON film.film_id = inventory.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
INNER JOIN customer
ON rental.customer_id = customer.customer_id
WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND description || title ILIKE '%boat%' ORDER BY replacement_cost DESC LIMIT 1






