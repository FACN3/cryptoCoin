const connect = require("../db_connection");

const updatePost = (updatedPost, cb) => {
  console.log("the post to update => ", updatedPost);
  connect.query(
    "UPDATE posts SET buyerseller= $1 , prefferedpayment= $2,coin= $3, qty= $4, price= $5 WHERE posts.post_id = $6",
    [
      updatedPost.buyerSeller + "er",
      updatedPost.prefferedpayment,
      updatedPost.coin,
      updatedPost.qty,
      updatedPost.price,
      updatedPost.post_id
    ],
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

module.exports = updatePost;
