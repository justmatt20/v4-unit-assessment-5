-- SELECT * post_id FROM helo_posts 
-- WHERE helo_users.username AS helo_users.author_username = $1
-- JOIN helo_posts ON helo_posts.author_id = helo_users.user_id;

-- SELECT * FROM helo_posts
-- WHERE author_id = $1

SELECT post_id, title, content, img author_username FROM helo_posts hp
JOIN helo_users hu ON hu.post_id = hp.author_id
WHERE lower(title) LIKE $1
ORDER BY date_created ASC;