const { Wines, Users } = require('../models')
const { wines } = require('../controllers')

module.exports = app => {
  // GET one type of wine
  app.get('/wines/:id/:type', (req, res ) => {
    Wines.findAll({
      where: {
        userId: parseInt(req.params.id),
        type: req.params.type
      } // end where
    }) // end findAll
    .then(wines => res.json(wines))
    .catch(e => console.log(e))
  })
    
  // GET all wines for one user
  app.get('/wines/:id', (req, res ) => {
    Wines.findAll({where: {userId: parseInt(req.params.id)}})
    .then(wines => res.json(wines))
    .catch(e => console.log(e))
  })
  
  // Add a wine to the database
  app.post('/wines', (req, res) => {
    Wines.create(req.body)
    .then(() => {res.sendStatus(200)})
    .catch(e => console.error(e))
  })
} // end module.exports

  