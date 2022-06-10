/** @format */

'use strict';

// Import Express & CORS
const express = require('express');
const cors = require('cors');

// Create the Express App
const app = express();

const authRoutes = require('./routers/auth-routes');
const apiRoutes = require('./routers/api_routes');

//  Use CORS
app.use(cors());
//  Allow JSON on Requests
app.use(express.json());

// Proof of Life // Home Route
app.get('/', (req, res) => {
  res.send('Home Server Route');
});

// Use Routes
app.use('/', authRoutes);
app.use('/', apiRoutes);

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
