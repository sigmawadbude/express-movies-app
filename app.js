const express = require('express');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const authMiddleware = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/api/v1', authRoutes);         // Public
app.use('/api/v1/movies', authMiddleware, movieRoutes); // Protected

// Handle 404
app.use((req, res, next) => {
  res.status(404).json({ status: 'failure', data: { error: 'Not Found' } });
});

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;
