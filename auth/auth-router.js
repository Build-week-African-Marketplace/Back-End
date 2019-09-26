const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');
const restricted = require('../auth/auth-middleware.js');

Users = require('./auth-model');
Products = require('../market/products-model')



/*********** REGISTRATION  ***********/
router.post('/signup', (req, res) => {
    let user = req.body;
    
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    }). catch(err => {
        console.log('User Registration', err)
        res.status(500).json(error);
    })
})

/*********** LOGIN  ***********/
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken({ user })
              const id = user.id
              res.status(200).json({ token, id })
            } else {
              res.status(401).json({ message: 'Invalid Login Credentials' })
            }
          })
          .catch(err => {
            console.log('Login Error', err)
            res.status(500).json(error);
          })
})

/*********** TESTING FOR USERS IN THE DATABASE AFTER SIGNUP AND LOGIN ***********/
router.get('/',  (req, res) => {
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

/*********** DELETE USER: CLEANING UP DEVELOPMENT DATABASE ***********/
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: deleted })
            } else {
                res.status(404).json({ message: 'The user with the given id cannot be found' })
            }
        })
        .catch(err => {
            console.log('DELETE Products', err)
            res.status(500).json({ message: 'Failed to delete user' })
        });
});



/*********** GENERATING TOKEN  ***********/
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