/** @format */

'use strict';

const base64 = require('base-64');
const User = require('../models/usersModel');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return errorByAuthentication();
  }

  let basic = req.headers.authorization.split(' ').pop();

  // User Input Username and Password
  let [user, pass] = base64.decode(basic).split(':');

  // Check if the Username and Password are Correct
  try {
    req.user = await User.authenticateBasic(user, pass);
    next();
  } catch (error) {
    return errorByAuthentication();
  }

  // error handler for invalid username or password
  function errorByAuthentication() {
    next('Invalid username or password');
  }
};
