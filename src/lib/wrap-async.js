// Read about why this is needed here: https://thecodebarbarian.com/80-20-guide-to-express-error-handling
const wrapAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = {
  wrapAsync
};
