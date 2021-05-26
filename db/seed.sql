CREATE TABLE helo_users (
id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
password VARCHAR (50) NOT NULL,
profile_pic TEXT
);

-- ALTER TABLE helo_users
-- RENAME COLUMN id
-- TO "user_id";

CREATE TABLE helo_posts (
post_id SERIAL PRIMARY KEY,
title VARCHAR(45) NOT NULL,
content TEXT,
img TEXT,
author_id INTEGER REFERENCES helo_users(user_id),
date_created TIMESTAMP
);