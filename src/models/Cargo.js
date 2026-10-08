const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('Cargo', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  cargo: DataTypes.STRING,
  descricao: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  empresa: {
    type: DataTypes.UUID, 
    allowNull: true 
  },
  ativo: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'cargos'
});

module.exports = Cargo;