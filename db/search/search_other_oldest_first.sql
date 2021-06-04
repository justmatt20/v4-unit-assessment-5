SELECT post_id, title, content, img author_username FROM helo_posts hp
JOIN helo_users hu ON hu.post_id = hp.author_id
WHERE lower(title) LIKE $1
AND author_id != $2
ORDER BY date_created ASC;