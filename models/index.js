const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connection')

const Wines = require('./Wines.js')(sequelize, Model, DataTypes)
const Users = require('./Users.js')(sequelize, Model, DataTypes)

Users.hasMany(Wines)
Wines.belongsTo(Users)

module.exports = {
  Wines,
  Users
}
