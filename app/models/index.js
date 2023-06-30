//Config the db and sequelize

const config = require("../config/db.config");

//TEST THE DATA THROW TO THE INITIALISATION
console.log(config.DB)
console.log(config.USER)
console.log(config.PASSWORD)
console.log(config.pool.max)

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host:config.HOST,
    dialect: config.dialect,

    pool:{
        max:config.pool.max,
        min:config.pool.min,
        acquire:config.pool.acquire,
        idle: config.pool.idle,
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(Sequelize, sequelize);
db.role = require("../models/role/model.js")(Sequelize, sequelize);

db.role.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});
db.ROLES= ["user", "admin", "moderator"];

module.exports = db;