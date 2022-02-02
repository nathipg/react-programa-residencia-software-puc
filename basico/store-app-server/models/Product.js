const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Product extends Model {}

Product.init({
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.NUMBER,
  },
  description: {
    type: DataTypes.TEXT,
  },
  picture: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'product',
  timestamps: false,
});

module.exports = Product;