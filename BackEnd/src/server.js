/** @format */

'use strict';

// Import Express & CORS
const express = require('express');
const cors = require('cors');

// Create the Express App
const app = express();

const authRouter = require('./routers/auth-routes');

//  Use CORS
app.use(cors());
//  Allow JSON on Requests
app.use(express.json());

// Proof of Life // Home Route
app.get('/', (req, res) => {
  res.send('Home Server Route');
});

app.use('/', authRouter);

// Error Handlers
const not_found = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
app.use(not_found);
app.use(errorHandler);

// Export Server to index
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Running on Port ${port}`);
    });
  },
};
