const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  director: {
    type: String,
    required: [true, 'Director is required'],
    trim: true,
  },
  releaseYear: {
    type: Number,
    required: [true, 'Release year is required'],
    min: [1900, 'Year too early'],
    max: [new Date().getFullYear(), 'Year in the future'],
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
