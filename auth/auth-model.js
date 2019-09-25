const db = require('../database/dbConfig');
// const Products = require('../market/products-model')

module.exports = {
    add,
    findBy,
    findById,
    find,
    remove
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


function remove(id) {
    //delete from schemes where id = 123
    return find()
        .where('id', id)
        .del()
}