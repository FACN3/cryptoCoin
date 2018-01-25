const jwt = require('jsonwebtoken');
const exclude = ['/', '/login', '/signup'];
require('env2')('config.env');

const authenticate = (req, res, next) => {
  console.log(req.headers.cookie);
  console.log('done');
  if (req.headers.cookie) {
    const regex = /jwt=[^;]+/;
    let cookieString;
    try {
      cookieString = req.headers.cookie.match(regex);
    } catch (err) {
      return res.redirect('/cookieError');
    }
    jwt.verify(
      cookieString[0].split('=')[1],
      process.env.SECRET,
      (err, decoded) => {
        if (err) {
          res.redirect('/cookieError');
        } else {
          if (exclude.includes(req.url)) {
            res.redirect('/learn');
          } else {
            next();
          }
        }
      }
    );
  } else {
    if (exclude.includes(req.url)) {
      next();
    } else {
      res.redirect('/login');
    }
  }
};

module.exports = authenticate;
