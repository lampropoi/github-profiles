const express = require('express');
const api = require('./routes/index');

const app = express();
app.set('json spaces', 2);

// allow cross origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Session');
  next();
});

// Serve api routes
app.use('/api', api.router);

module.exports = app;
