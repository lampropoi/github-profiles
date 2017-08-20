const express = require('express');
const github = require('./github');

const router = express.Router();
github(router);

module.exports = {
  router
};
