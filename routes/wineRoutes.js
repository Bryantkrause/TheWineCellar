const { Wines, Users } = require('../models')
const { winesC } = require('../controllers')

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
    winesC.checkWine(req.body)
    .then( result => {
      if(!result){ // If wine doesn't exist post wine to DB
        Wines.create(req.body)
        .then( r =>  res.send(r.dataValues) )
        .catch( e => console.error(e) )
      } else {
        winesC.updateWine(req.body)
        res.sendStatus(200)
      }
    })
  })

  // PUT for updating the quantity of a wine
  app.put('/wines/:id/:type/:name/:yearBottled/:quantity', (req, res) => {
    Wines.findOne({
      where: {
        userId: parseInt(req.params.id),
        type: req.params.type,
        name: req.params.name,
        yearBottled: req.params.yearBottled
      }
    })
    .then( wine => wine.update({ quantity: req.params.quantity})) // update the quantity column of the row
    .then( update => res.send(update.dataValues)) // return the updated row as a promise
    .catch(e => console.error(e))
  }) // end PUT for update the quantity of the wine

  // DELETE 

} // end module.exports

  