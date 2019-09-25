const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const restricted = require('../auth/auth-middleware.js');


Users = require('./auth-model');


//Registration
router.post('/signup', (req, res) => {
    let user = req.body;
    
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.add(user)
    .then(saved => {
        // console.log(saved)
        res.status(201).json(saved);
    }). catch(err => {
        console.log('User Registration', err)
        res.status(500).json(error);
    })
})

//Login
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    // console.log({username, password })
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken({ user })
              res.status(200).json({ token })
            } else {
              res.status(401).json({ message: 'Invalid Login Credentials' })
            }
          })
          .catch(err => {
            console.log('Login Error', err)
            res.status(500).json(error);
          })
})


router.get('/user', (req, res) => {
    let { username, password } = req.body;
    Users.find({ username, password } )
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            console.log('Login Error', err)
            res.status(500).json(error);
        })
})


//Products belonging to a certain user
router.get('/user/:id', restricted, (req, res) => {
    const { id } = req.params;
    //need to use middleware for 404 error handling
    Users.findProductsByUserId(id)
      .then(products => {
        if (products) {
          res.status(200).json(products);
        } 
      })
      .catch(err => {
        console.log('Login Error', err)
        res.status(500).json(error);
    })
  });

//Generating a token
function generateToken(user) {
    const payload = {
        username: user.username
    };
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router