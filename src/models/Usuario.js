const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true, 
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true, 
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  empresa: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cargo: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tema: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: 'usuarios'
});

module.exports = Usuario;