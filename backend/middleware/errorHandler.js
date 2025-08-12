const errorHandler = (err, req, res, next) => {
  // Always set status code to 500 for unhandled errors, unless already set
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    status: statusCode,
    message: err.message || 'Internal Server Error',
    // Show stack trace only in development
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};

module.exports = errorHandler;
