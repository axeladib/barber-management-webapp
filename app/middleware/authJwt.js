// To process Authentication & Authorization, we have these functions:
// - check if token is provided, legal or not. We get token from x-access-token of HTTP headers, then use jsonwebtoken's verify() function.
// - check if roles of the user contains required role or not.

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  // prototype.findByPk is the method to retieve user data by the primary key  
  User.findByPk(req.userId).then((user) => {
     user.getRoles().then(roles =>{
      
     })
  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
