const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class OrderItem extends Model {}

OrderItem.init({
  qty: {
    type: DataTypes.NUMBER,
  },
  price: {
    type: DataTypes.NUMBER,
  },
}, {
  sequelize,
  modelName: 'orderItem',
  timestamps: false,
});

module.exports = OrderItem;