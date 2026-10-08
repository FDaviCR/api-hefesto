const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  empresa: DataTypes.STRING,
  cnpj: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: true 
  },
  telefone: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  email: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  tableName: 'empresas'
});

module.exports = Empresa;