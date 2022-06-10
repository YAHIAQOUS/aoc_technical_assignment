/** @format */

'use strict';

const req = require('express/lib/request');
const User = require('../models/usersModel');

// Export Bearer Auth Middlware
try {
  if (!req.headers.authorization) {
    errorByAuthentication();
  }

  const token = req.headers.authorization.split(' ').pop();
  // Check the Token with the Original One by the Username & SECRET
  const validUser = await User.authenticateWithToken(token);

  req.user = validUser;
  req.token = validUser.token;
  next();
} catch (error) {
  errorByAuthentication(error);
}

function errorByAuthentication(e) {
  next('Invalid Token', e);
}
