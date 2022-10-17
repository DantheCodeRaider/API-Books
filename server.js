// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
var cors = require('cors')
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.json({
    message: 'Hello World'
    })
})

// BOOKS
const booksController = require('./controllers/books.js')
app.use('/books', booksController)

app.get('*', (req, res) => {
    res.status(404)
    //res.send('error404')
  })

  // LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })