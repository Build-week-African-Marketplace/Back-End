const router = require('express').Router();
const restricted = require('../auth/auth-middleware.js');

Products = require('./products-model.js');

/*@@@@@@@@@@@ NEED VALIDATION MIDDLEWARE @@@@@@@@@@@*/

/************** GET USER PRODUCTS **************/
router.get('/', restricted, (req, res) => {
    Products.get()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log('GET Products', err)
            res.status(500).json({ message: 'Failed to get products' })
        });
});

/************** ADD USER PRODUCT **************/
router.post('/', (req, res) => {
    const productData = req.body;

    Products.add(productData)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log('POST Products', err)
            res.status(500).json({ message: 'Failed to add product' })
        });
});

/************ UPDATE USER PRODUCT ************/
//Not working
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    
    Products.getById(id)
        .then(item => {
             console.log(item)
            if(item) {
                Products.update(changes, id)
                    .then(changeItem => {
                         res.status(202).json({updated:changeItem});
                    })
            } else {
                res.status(404).json({ message: 'Could not find the product with the given id' })
            }
        })
        .catch(err => {
            console.log('PUT Products', err)
            res.status(500).json({ message: 'Failed to update product' })
        });
});


/*********** DELETE USER PRODUCT ***********/
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Products.remove(id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ removed: deleted })
            } else {
                res.status(404).json({ message: 'The product with the given cannot be found' })
            }
        })
        .catch(err => {
            console.log('DELETE Products', err)
            res.status(500).json({ message: 'Failed to delete product' })
        });
});



module.exports = router;