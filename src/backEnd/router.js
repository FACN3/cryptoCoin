const router = require("express").Router();
const path = require("path");
const fetchPosts = require("../../database/queries/fetchPosts");
const { addUser } = require("../../database/queries/addUsers");
const addPost = require("../../database/queries/addPost");
const updatePost = require("../../database/queries/updatePost");
const deletePost = require("../../database/queries/deletePost");
const userPosts = require("../../database/queries/userPosts");
const connect = require("../../database/db_connection");
const bcrypt = require("bcrypt");
const validateUser = require("../../database/queries/validateUser");
const jwt = require("jsonwebtoken");
require("env2")("config.env");

router.get("/posts", fetchPosts);

router.post("/newUser", (req, res) => {
  const { username, password, email, country, city } = req.body;
  addUser(username, password, email, country, city, (err, result) => {
    if (err) {
      res.redirect("/signup");
    } else {
      res.redirect("/login");
    }
  });
});

router.post("/login", (req, res) => {
  validateUser(req.body, (err, result) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(err);
    } else {
      if (!result) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Invalid username or password");
      } else {
        var cookie = jwt.sign(JSON.stringify(result), process.env.SECRET);

        res.cookie("jwt", cookie);
        res.end();
      }
    }
  });
});
router.get("/username", (req, res) => {
  jwt.verify(
    req.headers.cookie.split("=")[1],
    process.env.SECRET,
    (err, decoded) => {
      if (err) {
      } else {
        res.send(decoded.username);
      }
    }
  );
});
router.get("/cookieError", (req, res) => {
  res.send("Clear your cookies!");
});
router.get("/userPosts", (req, res) => {
  jwt.verify(
    req.headers.cookie.split("=")[1],
    process.env.SECRET,
    (err, decoded) => {
      if (err) {
      } else {
        userPosts(decoded.username, (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send(result);
        });
      }
    }
  );
});
router.post("/addPost", (req, res) => {
  jwt.verify(
    req.headers.cookie.split("=")[1],
    process.env.SECRET,
    (err, decoded) => {
      if (err) {
        res.Redirect("/cookieError");
      } else {
        let newPost = {
          user_id: decoded.user_id,
          prefferedpayment: req.body.prefferedpayment,
          country: decoded.country,
          city: decoded.city,
          coin: req.body.coin,
          qty: req.body.qty,
          price: req.body.price,
          buyerSeller: req.body.buyerSeller
        };
        addPost(newPost, (err, result) => {
          if (err) {
            res.send(`Ooops Server Error ${err}`).status(500);
          } else {
            res.redirect("/user");
          }
        });
      }
    }
  );
});
router.post("/updatePost", (req, res) => {
  jwt.verify(
    req.headers.cookie.split("=")[1],
    process.env.SECRET,
    (err, decoded) => {
      if (err) {
        res.Redirect("/cookieError");
      } else {
        console.log(req.body);
        let newPost = {
          post_id: req.body.postId,
          prefferedpayment: req.body.prefferedpayment,
          country: decoded.country,
          city: decoded.city,
          coin: req.body.coin,
          qty: req.body.qty,
          price: req.body.price,
          buyerSeller: req.body.buyerSeller
        };
        updatePost(newPost, (err, result) => {
          if (err) {
            res.send("Ooops Server Error").status(500);
          } else {
            res.redirect("/user");
          }
        });
      }
    }
  );
});
router.post("/deletePost", (req, res) => {
  deletePost(req.body.post_id, (err, result) => {
    if (err) {
      res.send("Ooops Server Error").status(500);
    } else {
      res.redirect("/user");
    }
  });
});
module.exports = router;
