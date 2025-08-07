module.exports = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({
      status: 'failure',
      message: 'Validation failed',
      errors: result.error.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  req.body = result.data; // sanitized & typed
  next();
};
