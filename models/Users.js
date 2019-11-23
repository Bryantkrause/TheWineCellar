module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model { }

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize, modelName: 'user'})

  return User
}