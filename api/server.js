const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Routers
const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const productRouter = require('../market/products-router.js');
// const priceRouter = require()

//Server = express framework
const server = express();

//Server use ...
server.use(helmet());
server.use(cors());
server.use(express.json());

//Server Routes
server.use('/api/', authRouter);
server.use('/api/products', authenticate, productRouter);

//Testing the server
server.get('/', (req, res) => {
    res.send("It's alive!")
})

module.exports = server;
