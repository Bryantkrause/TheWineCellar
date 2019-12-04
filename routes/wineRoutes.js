const { Wines } = require('../models')
const { wines } = require('../controllers')

module.exports = app => {
  // Assigns wine to user
  app.put('/', (req, res) => {
    
    })

    // get all wines
  app.get('/wines', (req, res ) => {
    Wines.findAll()
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
  
   // Add a wine to the database
  app.post('/wines', (req, res) => {
    Wines.create(req.body)
    .then(() => {res.sendStatus(200)})
    .catch(e => console.error(e))})
  
    // Get all Red wines
  app.get('/Red', (req, res ) => {
    Wines.findAll()
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
  // Get all White wines
  app.get('/White', (req, res ) => {
    Wines.findAll()
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
  // Get all Rose wines
  app.get('/Rose', (req, res ) => {
    Wines.findAll()
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
  // Get all Dessert wines
  app.get('/Dessert', (req, res ) => {
    Wines.findAll()
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
  }
