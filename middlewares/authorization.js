const jwt = require("jsonwebtoken");

exports.authorized = (req, res, next) => {
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

      if (req.params.user_id != decoded.id) {
        return res.status(401).json({
          msg: "You are not authorized"
        });
      }

      next();
    });
  }

};
