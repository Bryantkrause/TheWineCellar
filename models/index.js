const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

module.exports = {
  booze: require('./')(sequelize, Model, DataTypes)
}
