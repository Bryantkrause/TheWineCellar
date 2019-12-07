const { Users, Wines } = require('../models')
const { usersC } = require('../controllers')

module.exports = app => {
  // GET all users
  app.get('/users', (req, res ) => {
    Users.findAll({include: Wines})
    .then(users => res.json(users))
    .catch(e => console.log(e))
  }) // End GET all Users

  // GET one user
  app.get('/users/:username', (req, res) => {
    Users.findOne( {where: { username: req.params.username } })
      .then( username => res.send(username))
      .catch( e => console.error(e))
  }) // End GET one user

  // GET for Log in
  app.get(`/users/:username/:password`, (req, res) => {
    Users.findOne({
      where: {
        username: req.params.username,
        password: req.params.password
      }
    })
    .then (result => result ? res.send(result) : res.send(false))
  }) // End GET for log in

  // POST for signing up
  app.post('/users', (req, res) => {
    // Check if username already exist in the table
    usersC.checkUser(req.body.username)
      .then(result => {
        if(!result){ // If username doesn't exist
          Users.create(req.body)
            .then( r => { res.send(r.dataValues) })
            .catch(e => console.error(e))
        } else { // If username already exists
          res.send('User already exists')
        }
      }) // end .then
      .catch(e => console.error(e))
  }) // End POST for signing up
} // end module.exports
