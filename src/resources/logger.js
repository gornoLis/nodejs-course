/* eslint-disable */
var errorHandler = (err, req, res, next) => {
  console.log(`${err.status} ${err.message}`);
  res.status(err.status).send();
};

var errorHandler = (err, message) => {
  console.log(`${err} ${message}`);
};

module.exports = errorHandler;
