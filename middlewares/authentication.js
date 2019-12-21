const jwt = require("jsonwebtoken");
// const config = require('./config.js');

exports.authenticated = (req, res, next) => {
  let tokenHeader = req.headers["authorization"];

  if(!tokenHeader) {
    return res.status(403).json({
      msg: "Token is not defined"
    })
  }

  let token = tokenHeader.slice(7, tokenHeader.length);

  if (token) {
    jwt.verify(token, "inilhosecretnya", (err, decoded) => {
      if (err) {
        return res.status(403).json({
          msg: "Token is not valid"
        });
      }

      return next();
    });
  } else {
    return res.status(403).json({
      msg: "You are not logged in, please Login and try again"
    });
  }
};
