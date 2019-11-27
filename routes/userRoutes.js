const { Users, Wines } = require('../models')
const { users } = require('../controllers')

module.exports = app => {
  // get all users
  app.get('/users', (req, res ) => {
    Users.findAll({include: Wines})
    .then(users => {
      res.json(users)})
      .catch(e => console.log(e))
    })

  // Get one user
  app.get('/users/:username', (req, res) => {
    Users.findOne( {where: { username: req.params.username } })
      .then( username => res.send(username))
    })

    // Post User to users table in DB
    app.post('/users', (req, res) => {
      // Check if username already exist in the table
      users.checkUser(req.body.username)
        .then(result => {
          if(!result){ // If username doesn't exist
            Users.create(req.body)
              .then(() => {res.sendStatus(200)})
              .catch(e => console.error(e))
          } else { // If username already exists
            res.send('User already exists')
          }
        }) // end .then
        .catch(e => console.error(e))
    })
  }
