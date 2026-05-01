const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  tableName: 'users'
});

module.exports = User;