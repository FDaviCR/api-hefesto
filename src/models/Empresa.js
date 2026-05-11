const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  empresa: DataTypes.STRING,
  cnpj: DataTypes.STRING,
  endereco: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  ativo: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'empresas'
});

module.exports = Empresa;