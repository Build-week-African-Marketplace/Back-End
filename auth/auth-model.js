const db = require('../database/dbConfig');
const Products = require('../market/products-model')

module.exports = {
    add,
    findBy,
    findById,
    findProductsByUserId,
    find
};

//Registration
function findById(id) {
    return db('users')
        .where({ id })
        .first()
};


function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
};

//Login
function findBy(filter) {
    return db('users')
        .where(filter)
};

//find all users 
function find() {
    return db('users')
}

//finding all users products by user id
function findProductsByUserId(id) {
    const userQuery = db('users').where({ id }).first();
    return Promise.all([userQuery, Products.getByUserId(id)])
        .then(([user, products]) => {
            user.products = products;
            return user;
        });
}