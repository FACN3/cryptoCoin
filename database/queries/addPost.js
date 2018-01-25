const connect = require("../db_connection");
const addPost = (postBody, cb) => {
  console.log(postBody);
  connect.query(
    `INSERT INTO posts(user_id, prefferedpayment, country, city, coin, qty, buyerseller, price)
   VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
    [
      postBody.user_id,
      postBody.prefferedpayment,
      postBody.country,
      postBody.city,
      postBody.coin,
      postBody.qty,
      postBody.buyerSeller + "er",
      postBody.price
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        console.log(result);
        // console.log('post.rows:', post.rows);
        cb(null, result);
      }
    }
  );
};

module.exports = addPost;
