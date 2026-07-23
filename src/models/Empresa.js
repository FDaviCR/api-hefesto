const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('Empresa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  empresa: DataTypes.STRING,
  cnpj: { 
    type: DataTypes.STRING, 
    unique: true, 
    allowNull: true 
  },
  endereco: { 
    type: DataTypes.STRING, 
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