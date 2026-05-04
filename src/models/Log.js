const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Log = sequelize.define('Log', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sucess: DataTypes.BOOLEAN,
  action: DataTypes.STRING,
  user: DataTypes.INTEGER
}, {
  timestamps: true,
  tableName: 'logs'
});

module.exports = Log;