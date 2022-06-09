/** @format */

'use strict';

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

// Import the Server
const server = require('./src/server.js');

//  Import Mongoose
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  //   useCreateIndex: true,
  useUnifiedTopology: true,
};

//  Connect DB then Start the Server
mongoose
  .connect(MONGODB_URI, options)
  .then(() => {
    server.start(process.env.PORT);
  })
  .catch((e) => {
    console.error(e.message);
  });
