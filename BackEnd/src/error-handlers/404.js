/** @format */

'use strict';

// Export Not Found Handler
module.exports = (req, res, next) => {
  res.status(404).json({ error: '404 Not Found' });
};
