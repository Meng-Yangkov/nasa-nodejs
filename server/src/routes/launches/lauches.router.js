const express = require('express');
const { httpGetAllLaunches } = require('./lauches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunches);

module.exports = launchesRouter;