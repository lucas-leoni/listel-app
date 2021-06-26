const Sequelize = require('sequelize');
const connection = new Sequelize('listel', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;