require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()
const db = require('./config')

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

require('./routes')(app)

db.sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))