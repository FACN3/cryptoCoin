const router = require('express').Router();
const path = require('path');
const fetchPosts = require('../../database/queries/fetchPosts');
const {addUser} = require('../../database/queries/addUsers');
const connect = require('../../database/db_connection');
const bcrypt = require("bcrypt");
const validateUser = require("../../database/queries/validateUser");


 router.get("/posts",fetchPosts);

 router.post("/newUser", (req, res)=>{
   const {username, password, email, country, city} = req.body;
   addUser(username, password, email, country, city, (err, result) => {
     if(err){
       console.log("error on routing adduser", err);
       res.redirect('/signup');
     }else{
       res.redirect('/login');
     }
   });
 })

router.post("/login",(req,res)=>{
  validateUser(req.body,(err,res)=>{
    if(err){
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(err);
    }else{
      if(res==0){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Invalid username or password");
      }else{
        res.writeHead(302, {
          Location: "/learn",
          "Content-Type": "application/json"
        });
        res.end();
      }
    }
  })
})


module.exports = router;
