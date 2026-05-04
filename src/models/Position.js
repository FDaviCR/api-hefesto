const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Position = sequelize.define('Position', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  permission: DataTypes.INTEGER,
  group: DataTypes.INTEGER,
  sector: DataTypes.INTEGER,
  active: DataTypes.BOOLEAN
}, {
  timestamps: true,
  tableName: 'positions'
});

module.exports = Position;