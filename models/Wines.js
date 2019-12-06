module.exports = (sequelize, Model, DataTypes) => {
  class Wine extends Model { }

  Wine.init({
    types: DataTypes.STRING,
    name: DataTypes.STRING,
    brand: DataTypes.STRING, 
    yearBottled: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {sequelize, modelName: 'wine'})

  return Wine
}

