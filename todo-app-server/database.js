const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task-db', 'user', 'pass', {
  dialect: 'sqlite',
  host: './dev.sqlite'
});

module.exports = sequelize;