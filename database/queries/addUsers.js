const connect = require("../db_connection");
const bcrypt = require("bcrypt");

const salt = 10;

 const addUser = (username, password, email, country, city, cb) => {
   bcrypt.hash(password, salt, (err, hash) => {
     connect.query(`INSERT INTO users (username, password, email, country, city) VALUES ($1, $2, $3, $4, $5)`,
     [username, hash, email, country, city], (err, result) => {
       if(err){
         console.log("error in writing the query", err);
         cb(err);
       }else{
         cb(null, result);
       }
     });
   });
 }

 module.exports = {addUser};
