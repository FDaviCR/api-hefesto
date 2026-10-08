const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nome: DataTypes.STRING,
  cpf_cnpj: DataTypes.STRING,
  telefone: DataTypes.STRING,
  email: DataTypes.STRING,
  empresa: DataTypes.UUID,
  ativo: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'clientes'
});

module.exports = Cliente;