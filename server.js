// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))

//Routes
app.get('/', (req, res) => {
    res.send('home')
})

// Places
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