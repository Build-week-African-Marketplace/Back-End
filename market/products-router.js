const router = require('express').Router();
const restricted = require('../auth/auth-middleware.js');

Products = require('./products-model.js');

router.get('/', restricted, (req, res) => {
    res.send("Products are waiting!")
})



module.exports = router;