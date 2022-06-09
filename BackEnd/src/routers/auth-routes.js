/** @format */

'use strict';

const express = require('express');
const authRouter = express.Router();

const basicAuth = require('../middlwares/basicAuth');

authRouter.post('/sigiin', basicAuth, signInHandler);

function signInHandler(req, res, next) {
  const user = {
    user: req.user,
  };
  try {
    res.status(200).send(user);
  } catch (error) {
    next(error.message, 'sign-in error');
  }
}

module.exports = authRouter;
