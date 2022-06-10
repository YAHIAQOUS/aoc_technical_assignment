/** @format */

'use strict';

const express = require('express');
const authRouter = express.Router();
const User = require('../models/usersModel');

const basicAuth = require('../middlwares/basicAuth');

authRouter.post('/signup', signUpHandler);
authRouter.post('/signin', basicAuth, signInHandler);

async function signUpHandler(req, res, next) {
  try {
    // Create New User Object
    let user = new User(req.body);

    // Save User Object
    const userData = await user.save();

    // GET the User Object and the Token
    const output = {
      user: userData,
      token: userData.token,
    };

    // Return the Object and the Token to FrontEnd
    res.status(201).send(output);
  } catch (error) {
    next(error.message, 'SignUp Error');
  }
}

function signInHandler(req, res, next) {
  const user = {
    user: req.user,
    token: req.user.token,
  };
  try {
    res.status(200).send(user);
  } catch (error) {
    next(error.message, 'sign-in error');
  }
}

module.exports = authRouter;
