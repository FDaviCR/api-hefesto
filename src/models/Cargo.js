const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('Cargo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cargo: DataTypes.STRING,
  descricao: DataTypes.STRING,
  permissao: DataTypes.INTEGER,
  grupo: DataTypes.INTEGER,
  setor: DataTypes.INTEGER,
  ativo: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'cargos'
});

module.exports = Cargo;