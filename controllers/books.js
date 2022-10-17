const express = require('express')
const router = express.Router()
const db = require('../models/books.js')
const seedBooks = require('../seeders/seed-books.js')

// GET /books
router.get('/', (req, res) => {
    db.find()
    .then((books) => {
      res.status(200).json(books)
    })
    .catch(err => {
      console.log(err) 
      res.json({
        message: 'Somerthing went wrong...'
    })
    })
})

// GET /book
router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .then((books) => {
    res.status(200).json(books)
  })
  .catch(err => {
    console.log(err) 
    res.json({
      message: 'Somerthing went wrong...'
  })
  })
})

// CREATE
router.post('/', (req, res) => {
  db.insertMany(req.body)
  .then(res.status(200).json({
      message: 'Create successful'
  }))
  .catch(res.status(400).json({
      message: 'Create unsuccessful'
  }))
})

// UPDATE
router.put('/:id', (req, res) => {
  db.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
        .then(updatedBook => {
          console.log(updatedBook) 
          res.status(204).json({
          message: 'Update successful'
      })})
      .catch(err => {
        console.log(err) 
        res.json({
          message: 'Somerthing went wrong...'
      })
      })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.findByIdAndDelete(req.params.id) 
      .then(deletedBook => {
        console.log(deletedBook) 
        res.status(204).json({
        message: 'Delete successful'
    })})
    .catch(err => {
      console.log(err) 
      res.json({
        message: 'Somerthing went wrong...'
    })
  })
})

// SEED Books
router.get('/seed', (req, res) => {
    db.insertMany(seedBooks)
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

module.exports = router