module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index', {name: "The Wine Cellar | Login"})
  })

  app.get('/cellar', (req, res) => {
    res.render('cellar', {name: "The Wine Cellar | Home"})
  })

  app.get('/product', (req, res) => {
    res.render('product', {name: "The Wine Cellar | Product"})
  })
} // end module.exports
