const connect = require("../db_connection");
const bcrypt = require("bcrypt");

const validateUser = (user,cb)=>{

  connect.query(`SELECT * FROM users WHERE username = $1`,[user.username],(err,res)=>{
    if(err){
    return  cb(err)
    }
    if(res.rows.length==0){
      return cb(null,0);
    }

    bcrypt.compare(user.password,res.rows[0].password,(err,isValid)=>{
      if(err){
        return cb(err);
      }
      if(!isValid){
        return cb(null,0);
      }
      return cb(null , res.rows[0]);
    })

  })
}

module.exports = validateUser;
