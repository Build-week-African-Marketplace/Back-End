const db = require('../database/dbConfig');

module.exports = {
    get
    // getBy,
    // getById,
    // add,
    // update,
    // remove
}

function get() {
    return db('products')
}

