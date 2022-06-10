/** @format */

'use strict';

// Export Permissions Middleware
module.exports = (capability) => {
  return (req, res, next) => {
    try {
      // Check if the Client Hass the Permisssion
      if (req.user.capabilities.includes(capability)) {
        next();
      } else {
        next('Access Denied');
      }
    } catch (error) {
      next('Something is Wrong!');
    }
  };
};
