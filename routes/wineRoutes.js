const { Wines } = require('../models')

module.exports = app => {
    // get all wines
  app.get('/wines', (req, res ) => {
    Wines.findAll()
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
  
   // Create a new wine
  app.post('/wines', (req, res) => {
    Wines.create(req.body)
    .then(() => {res.sendStatus(200)})
    .catch(e => console.log(e))})
  
  }

  