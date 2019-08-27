const handleError = (error, req, res, next) => {
  if (error) {
    return res.status(500).json({
      type: 'ServerError',
      message: error.message
    });
  }
  next(error);
};

module.exports = {
  handleError
};
