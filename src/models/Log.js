const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Log = sequelize.define('Log', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  mensagem: DataTypes.STRING,
  usuario: DataTypes.INTEGER,
  tabela: DataTypes.STRING,
  acao: DataTypes.STRING,
  sucesso: DataTypes.BOOLEAN,
  erro: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'logs'
});

module.exports = Log;