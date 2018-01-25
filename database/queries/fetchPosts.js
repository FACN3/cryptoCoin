const connect = require("../db_connection");

const posts = (req, res) => {
  connect.query(
    "SELECT * FROM posts INNER JOIN users ON (posts.user_id = users.user_id)",
    (err, posts) => {
      if (err) {
        res.send(`sorry error ${err}`);
      } else {
        // console.log('post.rows:', post.rows);
        res.send(posts.rows);
      }
    }
  );
};

module.exports = posts;
