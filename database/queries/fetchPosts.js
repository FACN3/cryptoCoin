const connect = require('../db_connection');

const posts = (req, res) => {
  connect.query('SELECT * FROM posts INNER JOIN users ON (posts.user_id = users.user_id)', (err, posts) => {
    if (err) {
      res.status(500).end("Server Error, Please Try In Other Time");
    } else {
      res.send(posts.rows);
    }
  });
}

module.exports = posts;
