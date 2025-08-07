const Movie = require('../models/Movie');
const CustomError = require('../utils/CustomError');

exports.getAllMovies = async () => {
  return await Movie.find();
};

exports.createMovie = async (movieData) => {
  const movie = new Movie(movieData);
  return await movie.save();
};

exports.getMovie = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) throw new CustomError('Movie not found', 404);
  return movie;
};

exports.updateMovie = async (id, movieData) => {
  const updated = await Movie.findByIdAndUpdate(id, movieData, { new: true, runValidators: true });
  if (!updated) throw new CustomError('Movie not found', 404);
  return updated;
};

exports.deleteMovie = async (id) => {
  const deleted = await Movie.findByIdAndDelete(id);
  if (!deleted) throw new CustomError('Movie not found', 404);
  return deleted;
};
