// require mongoose 
require('dotenv').config()
const mongoose = require('mongoose')



// creating Schema constructor 
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    cuisines: { type: String, required: true },
    pic: { type : String, default: '/images/sarah-cervantes-PKXAiiy1O4U-unsplash.jpg'  },
    founded: {
      type: Number,
      min: [1673, 'Surely not that old?!'],
      max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    rating: { type: String, default: 'Not Rated' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  
    
  })

// Helper methods

//Cennect to the DB
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// model and export 
module.exports = mongoose.model('Book', bookSchema)