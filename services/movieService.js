const Movie = require('../models/Movie');

exports.getAllMovies = async () => {
  return await Movie.find();
};

exports.createMovie = async (movieData) => {
  const movie = new Movie(movieData);
  return await movie.save();
};

exports.updateMovie = async (id, movieData) => {
  const updated = await Movie.findByIdAndUpdate(id, movieData, { new: true, runValidators: true });
  if (!updated) throw new Error('Movie not found');
  return updated;
};

exports.deleteMovie = async (id) => {
  const deleted = await Movie.findByIdAndDelete(id);
  if (!deleted) throw new Error('Movie not found');
  return deleted;
};
