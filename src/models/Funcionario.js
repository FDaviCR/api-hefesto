const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Funcionario = sequelize.define('Funcionario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sys_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nome: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  empresa: DataTypes.INTEGER,
  cargo: DataTypes.INTEGER,
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  tableName: 'funcionarios'
});

module.exports = Funcionario;