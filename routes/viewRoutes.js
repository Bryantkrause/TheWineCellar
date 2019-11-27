module.exports = app => {
  app.get('/', (req, res) => {
<<<<<<< Updated upstream
    res.render('index')
=======
    res.render('index', {name: "The Wine Cellar | Login"})
>>>>>>> Stashed changes
  })

  app.get('/cellar', (req, res) => {
    res.render('cellar', {name: "The Wine Cellar | Home"})
  })
}
