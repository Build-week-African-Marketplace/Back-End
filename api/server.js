const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Routers
const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const productRouter = require('../market/products-router.js');
const priceRouter = require('../pricing/price-router')

//Server = express framework
const server = express();

//Server use ...
server.use(helmet());
server.use(cors());
server.use(express.json());

//Server Routes
server.use('/api', authRouter);
server.use('/api/products', authenticate, productRouter);
server.use('/api/pricing', authenticate, priceRouter);

//What will be seen when the API is brought up on Heroku
server.get('/', (req, res) => {
    res.status(200).send(
      "<h1>Welcome to the African Marketplace Backend Server</h1><a href='https://documenter.getpostman.com/view/8666652/SVn3ruoH'>Click this link to see the API Documentation</a>"
    )
  });
  
module.exports = server;
