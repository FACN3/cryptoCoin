const jwt = require('jsonwebtoken');
const exclude = ["/", "/login", "/signup"];
require('env2')('config.env');

const authenticate = (req, res, next) => {
  if (req.headers.cookie) {
    jwt.verify(req.headers.cookie.split("=")[1], process.env.SECRET, (err, decoded) => {
      if (err) {
        res.redirect("/cookieError");
      } else {
        if (exclude.includes(req.url)) {
          res.redirect("/learn");
        } else {
          next();
        }
      }
    })
  } else {
    if (exclude.includes(req.url)) {
      next();
    } else {
      res.redirect("/login");
    }
  }

}

module.exports = authenticate;
