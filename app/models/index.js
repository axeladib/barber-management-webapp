//Config the db and sequelize

const config = require("../config/db.config");

//TEST THE DATA THROW TO THE INITIALISATION
console.log(config.DB);
console.log(config.USER);
console.log(config.PASSWORD);
console.log(config.pool.max);

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(Sequelize, sequelize);
db.role = require("../models/role/model.js")(Sequelize, sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin", "moderator"];
// ### Initialise Sequelize

// create at app/models/index.js

// **Purpose of initialise the Sequelize**
// - Association between the Users and Roles in **Many to many associations **
// > One USER can have several ROLES
// > one ROLE can be taken by several USERS

// _User.belongsToMany(Role)_ indicate that user model can belong to many Roles and vice versa

// _User.belongsToMany(Role)_ indicate that user model can belong to many Roles and vice versa

// **through, foreignKey, otherKey** is a new item created for the new table of _userroles_ as connection between _users_ and _roles_ table /
// via the primary key is _foreign keys_

module.exports = db;
