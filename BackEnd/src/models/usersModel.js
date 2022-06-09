/** @format */

'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// Encrypet Password Before Saving in DB
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

module.exports = mongoose.model('users', users);
