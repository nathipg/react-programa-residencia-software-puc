const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Order extends Model {}

Order.init({
  date: {
    type: DataTypes.STRING,
  },
  total: {
    type: DataTypes.NUMBER,
  },
}, {
  sequelize,
  modelName: 'order',
  timestamps: false,
});

module.exports = Order;