const connect = require("../db_connection");

const deletePost = (postId, cb) => {
  connect.query(
    "DELETE FROM posts WHERE posts.post_id= $1",
    [postId],
    (err, result) => {
      if (err) {
        cb(err);
      } else {
        // console.log('post.rows:', post.rows);
        cb(null, result);
      }
    }
  );
};

module.exports = deletePost;
