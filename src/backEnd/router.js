const router = require('express').Router();
const path = require('path');
const fetchPosts = require('../../database/queries/fetchPosts');
const {addUser} = require('../../database/queries/addUsers');
const connect = require('../../database/db_connection');
const bcrypt = require("bcrypt");
const validateUser = require("../../database/queries/validateUser");
const jwt = require('jsonwebtoken');
require('env2')('config.env');

router.get("/posts", fetchPosts);

router.post("/newUser", (req, res) => {
  const {username, password, email, country, city} = req.body;
  addUser(username, password, email, country, city, (err, result) => {
    if (err) {
      console.log("error on routing adduser", err);
      res.redirect('/signup');
    } else {
      res.redirect('/login');
    }
  });
})

router.post("/login", (req, res) => {
  validateUser(req.body, (err, result) => {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/html"});
      res.end(err);
    } else {
      if (!result) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("Invalid username or password");
      } else {
        var cookie = jwt.sign(JSON.stringify(result), process.env.SECRET);

        res.cookie("jwt", cookie);
        res.end();
      }
    }
  })
})
router.get("/username", (req, res) => {
  jwt.verify(req.headers.cookie.split("=")[1], process.env.SECRET, (err, decoded) => {
    if (err) {} else {
      res.send(decoded.username);
    }
  })
})
router.get("/cookieError", (req, res) => {
  res.send("Clear your cookies!").;
})
router.get("/userPosts", (req, res) => {
  jwt.verify(req.headers.cookie.split("=")[1], process.env.SECRET, (err, decoded) => {
    if (err) {} else {
      userPosts(decoded.username, (err, res) => {
        res.send(res);
      })
    }
  })
})

module.exports = router;
