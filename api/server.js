const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Routers
// const authenticate = require('');
const authRouter = require('../auth/auth-router.js');
// const marketRouter = require('');

//Server = express framework
const server = express();

//Server use ...
server.use(helmet());
server.use(cors());
server.use(express.json());

//Server Routes
server.use('/api/', authRouter);
// server.use('api/market', authenticate, marketRouter);

//Testing the server
server.get('/', (req, res) => {
    res.send("It's alive!")
})

module.exports = server;
