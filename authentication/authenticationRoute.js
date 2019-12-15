
const express = require('express');
const router = express.Router();//we match all routes with the functions wich it executes
const AuthenticationServer = require('./authenticationServer');

router.post('/login',AuthenticationServer.Login);
router.get('/fetchIPAddress',AuthenticationServer.FecthIPAddress);
module.exports = router;//export the routes only