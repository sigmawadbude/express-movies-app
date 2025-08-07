const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log the error
  logger.error(err);

  res.status(statusCode).json({
    status: 'failure',
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    },
  });
};
