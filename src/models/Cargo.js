const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('Cargo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cargo: DataTypes.STRING,
  descricao: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  permissao: {
    type: DataTypes.INTEGER,
    allowNull: true 
  },
  empresa: {
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  ativo: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'cargos'
});

module.exports = Cargo;