const express = require('express')
const router = express.Router()
const db = require('../models/books.js')
const seedBooks = require('../seeders/seed-books.js')

// GET /books
router.get('/', (req, res) => {
    db.Book.find()
    .then((books) => {
      res.send(books)
    })
    .catch(err => {
      console.log(err) 
      res.send('Error 404')
    })
})

// SEED Books
router.get('/seed', (req, res) => {
    db.Book.create(seedBooks)
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

module.exports = router