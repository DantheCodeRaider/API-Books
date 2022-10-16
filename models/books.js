// require mongoose 
require('dotenv').config()
const mongoose = require('mongoose')

// creating Schema constructor 
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: 'Book Description' },
    year: {
        type: Number,
        min: [1473, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
      },
    quantity: {
        type: Number,
        min: [0, 'Time to order more'],
        max: [100000000, 'Hey, this are you sure we have that many?']
      },
    imageURL: { type : String, default: '/assets/shinobi-initiative.jpeg'  }
})

// Helper methods

//Cennect to the DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// model and export 
module.exports = mongoose.model('Book', bookSchema)

