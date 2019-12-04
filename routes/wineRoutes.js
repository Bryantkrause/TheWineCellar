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
  }

  
