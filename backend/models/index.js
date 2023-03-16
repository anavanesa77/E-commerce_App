const env = process.env.NODE_ENV || 'development';
const config = require("../config/config")[env];

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.database, config.username, config.password,  {
    host: config.host,
    dialect: config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.article = require("./article.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.carrito = require("./carrito.model.js")(sequelize, Sequelize);

module.exports = db;