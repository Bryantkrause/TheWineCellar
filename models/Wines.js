module.exports = (sequelize, Model, DataTypes) => {
  class Wine extends Model { }

  Wine.init({
    types: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    region: DataTypes.STRING, 
    yearBottled: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {sequelize, modelName: 'wine'})

  return Wine
}

