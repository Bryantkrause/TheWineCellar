const { Wines, Users } = require('../models')
const { wines } = require('../controllers')

module.exports = app => {
    // get one type of wine
  app.get('/wines/:id/:type', (req, res ) => {
    Wines.findAll({where: {id: parseInt(req.params.id)}},{where: {type: parseInt(req.params.type)}})
    .then(wines => {
      res.json(wines)})
      .catch(e => console.log(e))
    })
    
    // get all wines for user
    app.get('/wines/:id', (req, res ) => {
      Wines.findAll({where: {userId: parseInt(req.params.id)}})
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

  