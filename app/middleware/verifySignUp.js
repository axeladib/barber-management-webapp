const db = require("../models/db");
const ROLES = db.ROLES;
const User = db.user;

 const checkDuplicateUsernameOrEmail = (req, res, next) => {
  //TODO: Perform the query to Find mathcing username
  // Return  a Promise that rsolve of fpund user object or "null if no matching user is found"

  //QUERY FOR USERNAME
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({ message: "Failed!!! Username is already in use" });
      return;
    }

    //QUERY FOR EMAIL

    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({ Message: "Failed!!! Email is already in use" });
        return;
      }
      next();
    });
  });
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};
module.exports = verifySignUp;
