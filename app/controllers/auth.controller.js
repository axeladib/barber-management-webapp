//TODO: SIGNUP :create new User in database
//TODO: SIGNIN :findusername, compare password with password in databas eusing brcrypt
//TODO: TOKEN  :generate token using JWT
//TODO: return the user information & access token

const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

const brcrypt = require("brcrypt");
const require = require("jsonwebtoken");
//TODO: Craete database
//TODO: After the data req of username, email and password return the promise
//TODO: The promise will consist of data with role.
//TODO: Get the data in the form of array, the request the role
//TODO: Return the prmise and set the role to the user

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: brcrypt.hashSync(req.body.password, 10),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: { name: { [Op.or]: req.body.roles } },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({
              message: "User was registered successfully",
            });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully" });
        });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};
