module.exports = app => {
  require('./wineRoutes.js')(app)
  require('./userRoutes.js')(app)
}
