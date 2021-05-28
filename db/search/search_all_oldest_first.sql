SELECT * post_id FROM helo_posts 
WHERE helo_users.username AS helo_users.author_username = $1
JOIN helo_posts ON helo_posts.author_id = helo_users.user_id;

SELECT * FROM helo_posts
WHERE author_id = $1