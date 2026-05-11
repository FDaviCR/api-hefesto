const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  senha: DataTypes.STRING,
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  empresa: DataTypes.INTEGER,
  cargo: DataTypes.INTEGER,
  tema: DataTypes.INTEGER
}, {
  timestamps: true,
  tableName: 'usuarios'
});

module.exports = Usuario;