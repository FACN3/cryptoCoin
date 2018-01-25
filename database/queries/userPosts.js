const connect = require('../db_connection');

const userPosts = (username, cb) => {
  connect.query('SELECT * FROM posts INNER JOIN users ON (posts.user_id = users.user_id) WHERE username = $1', [username], (err, posts) => {
    if (err) {
      cb(err);
    } else {
      // console.log('post.rows:', post.rows);
      cb(null, posts.rows);
    }
  });
}

module.exports = userPosts;
