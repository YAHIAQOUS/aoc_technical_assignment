/** @format */

'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Users Schema
const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default: 'shopper',
    enum: ['seller', 'shopper'],
  },
});

// Encrypt Password Before Saving in DB
users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

// Create Static Method for Basic Authentication
users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const valid_password = await bcrypt.compare(password, user.password);
    if (valid_password) {
      return user;
    }
  }
  throw new Error('Invalid UserName or Password');
};

// Create Static Method for Bearer Authentication
users.statics.authenticateWithToken = async function (token) {
  try {
    const parsedToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: parsedToken.username });
    if (user) {
      return user;
    }
    throw new Error('User Not Found');
  } catch (error) {
    throw new Error(erorr);
  }
};

// Get the Token for Bearer Auth, for Every User Document
users.virtual('token').get(function () {
  let tokenObject = {
    username: this.username,
    email: this.email,
    role: this.role,
  };
  return jwt.sign(tokenObject, process.env.SECRET);
});

// Get Capabilities for the User
users.virtual('capabilities').get(function () {
  let acl = {
    shopper: ['read', 'write'],
    seller: ['read', 'write', 'edit', 'delete'],
  };
  return acl[this.role];
});

module.exports = mongoose.model('users', users);
