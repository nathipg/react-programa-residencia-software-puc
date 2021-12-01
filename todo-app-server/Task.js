const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Task extends Model {}

Task.init({
  title: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize,
  modelName: 'task',
  timestamps: false,
});

module.exports = Task;