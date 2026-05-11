const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: DataTypes.STRING,
  cpf_cnpj: DataTypes.STRING,
  endereco: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  empresa: DataTypes.INTEGER,
  ativo: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'clientes'
});

module.exports = Cliente;