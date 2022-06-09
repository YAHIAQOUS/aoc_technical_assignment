/** @format */

'use strict';

// Export 500 Error Handler
module.exports = (err, req, res, next) => {
  res.status(500).json({ status: 500, message: err });
};
