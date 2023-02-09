const dbConfig = require("../config/db.config.cjs");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rentals = require("./rentals.model.cjs")(sequelize, Sequelize);
db.bikes = require("./bikes.model.cjs")(sequelize, Sequelize);
db.locations = require("./locations.model.cjs")(sequelize, Sequelize);
db.users = require("./users.model.cjs")(sequelize, Sequelize);

module.exports = db;