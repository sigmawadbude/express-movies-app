const movieService = require('../services/movieService');
const asyncHandler = require('../utils/asyncHandler');

exports.getMovies = asyncHandler(async (req, res) => {
    const movies = await movieService.getAllMovies();
    res.json({ status: 'success', data: { movies } });
});

exports.addMovie = asyncHandler(async (req, res) => {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json({ status: 'success', data: { movie } });
});

exports.updateMovie = asyncHandler(async (req, res) => {
  const movie = await movieService.updateMovie(req.params.id, req.body);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = 404;
    throw error;
  }
  res.json({ status: 'success', data: { movie } });
});

exports.deleteMovie = asyncHandler(async (req, res) => {
  const movie = await movieService.deleteMovie(req.params.id);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = 404;
    throw error;
  }
  res.json({ status: 'success', data: { movie } });
});
