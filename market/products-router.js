const router = require('express').Router();
const restricted = require('../auth/auth-middleware.js');

Products = require('./products-model.js');

/************** GET USER PRODUCTS **************/
router.get('/', restricted, (req, res) => {
    res.send("Products are waiting!")
});

/************** ADD USER PRODUCT **************/
router.post('/', (req, res) => {

});

/************ UPDATE USER PRODUCT ************/
router.put('/:id', (req, res) => {
    
});

/*********** DELETE USER PRODUCT ***********/
router.delete('/:id', (req, res) => {
    
});



module.exports = router;