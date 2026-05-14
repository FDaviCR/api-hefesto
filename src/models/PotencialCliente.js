const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  cliente: DataTypes.BOOLEAN

}, {
  timestamps: true,
  tableName: 'clientes'
});

module.exports = Cliente;