const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Aluno extends Model {}

Aluno.init({
  nome: {
    type: DataTypes.STRING
  },
  idade: {
    type: DataTypes.STRING
  },
  telefone: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'aluno',
  timestamps: false,
});

module.exports = Aluno;