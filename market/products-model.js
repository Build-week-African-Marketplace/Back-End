const db = require('../database/dbConfig');

module.exports = {
    get,
    getById,
    add,
    update,
    remove
}

function get() {
    //select * from products
    return db('products')
};

function getById(id) {
    //select * from products where id = 123 is found first
    return db('products')
        .where(({ id }))
        .first()
};

function add(product) {
    //insert into products() values() use getById helper function
    return db('products')
        .insert(product)
        .then(ids => {
            return getById(ids[0])
        })
};

function update(id, changes) {
    //update  products set  where id = 123
    return db('products')
        .where({ id })
        .update(changes)
}

function remove(id) {
    //delete from schemes where id = 123
    return db('products')
        .where('id', id)
        .del()
}

