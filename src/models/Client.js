const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  cpf_cnpj: DataTypes.STRING,
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: DataTypes.STRING,
  company: DataTypes.INTEGER,
  active: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'clients'
});

module.exports = Client;