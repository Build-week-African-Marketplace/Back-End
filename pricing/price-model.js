const db = require('../database/dbConfig');

module.exports = {
    get,
    getById
}

function get() {
    return db('product_pricing')
};

//this may need to change to find by name. But may be handled by front-end.
function getById(id) {
    //select * from product_pricing where id = 123 is found first
    return db('product_pricing')
        .where(({ id }))
        .first()
}
