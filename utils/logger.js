const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

const logger = createLogger({
  level: 'info', // log level (e.g. info, warn, error)
  format: combine(
    colorize(),           // adds color to console logs
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // capture stack trace in error logs
    logFormat
  ),
  transports: [
    new transports.Console(), // logs to console
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // errors only
    new transports.File({ filename: 'logs/combined.log' })               // all logs
  ],
  exitOnError: false,
});

module.exports = logger;
