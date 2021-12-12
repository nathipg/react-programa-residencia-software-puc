const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class OrderItem extends Model {}

OrderItem.init({
  qty: {
    type: DataTypes.NUMBER,
  },
  total: {
    type: DataTypes.NUMBER,
  },
}, {
  sequelize,
  modelName: 'order-item',
  timestamps: false,
});

module.exports = OrderItem;