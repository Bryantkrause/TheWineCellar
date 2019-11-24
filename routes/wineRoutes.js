const { Wines, Users } = require('../models')

module.exports = app => {

  app.get('/wines', (req, res ) => {
    Wines.findAll()
    .then(actors => {
      res.json(actors)})
      .catch(e => console.log(e))
    })
  
   // Create a new wine
  app.post('/wines', (req, res) => {
    Wines.create(req.body)
    .then(() => {res.sendStatus(200)})
    .catch(e => console.log(e))})

  }

  