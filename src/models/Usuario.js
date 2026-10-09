const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { LISTA_ROLES, ROLES } = require('../config/roles');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
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
    type: DataTypes.UUID,
    allowNull: true
  },
  role: {
    type: DataTypes.ENUM(...LISTA_ROLES),
    allowNull: false,
    defaultValue: ROLES.CLIENTE
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