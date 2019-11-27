const { Wines } = require('../models')

module.exports = app => {
<<<<<<< HEAD
  // Puts a new wine in the cellar(wine table)
  app.post('/', (req, res) => {
    
    })

  // Assigns wine to user
  app.put('/', (req, res) => {
    
    })

  // Shows all the wine collected in the cellar
  app.get('/', (req, res) => {
    res.send('')
    })
}
=======
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

  
>>>>>>> e32cea9e0120cd3f2d0dcd4e6209dc6536665973
