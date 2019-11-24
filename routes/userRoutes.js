const { Users, Wines } = require('../models')

module.exports = app => {
  // get all users
  app.get('/users', (req, res ) => {
    Users.findAll({include: Wines})
    .then(users => {
      res.json(users)})
      .catch(e => console.log(e))
    })

    app.post('/users', (req, res) => {
      Users.create(req.body)
      .then(() => {res.sendStatus(200)})
      .catch(e => console.log(e))})
  
  }
