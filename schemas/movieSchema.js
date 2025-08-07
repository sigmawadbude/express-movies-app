const { z } = require('zod');

const movieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  director: z.string().min(1, 'Director is required'),
  releaseYear: z
    .number({ invalid_type_error: 'releaseYear must be a number' })
    .gte(1900, 'Year too early')
    .lte(new Date().getFullYear(), 'Year in future'),
  genre: z.string().min(1, 'Genre is required'),
});

module.exports = { movieSchema };
