const jwt = require('jsonwebtoken');
const exclude = ['/', '/login', '/signup'];
require('env2')('config.env');

const authenticate = (req, res, next) => {
  if (req.headers.cookie) {
    const regex = /jwt=\S+/;
    const cookieString = req.headers.cookie.match(regex);
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
