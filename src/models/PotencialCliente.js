const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PotencialCliente = sequelize.define('PotencialCliente', {
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
  tableName: 'potenciais_clientes'
});

module.exports = PotencialCliente;