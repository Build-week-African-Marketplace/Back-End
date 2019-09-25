const db = require('../database/dbConfig');

module.exports = {
    get,
    getByUserId,
    getById,
    add,
    update,
    remove
}

function get() {
    //select * from products
    return db('products')
    .select(
        'productName',
        'description',
        'price',
        'users.id AS userId',
        'users.username AS user_name'
    )
    .join('users', 'users.id', 'products.user_id')
        
};

function getById(id) {
    return get().where({ "products.user_id": id }).first();
  }

function getByUserId(id) {
    return get().where({ "users.id": id });
};

function add(product) {
    //insert into products() values() use getById helper function
    return db('products')
        .insert(product)
        .then(ids => {
            return getById(ids[0])
        })
};

function update(changes, id) {
    //update  products set  where id = 123
    return db('products')
        .where({ id })
        .update(changes);
        
}

function remove(id) {
    //delete from schemes where id = 123
    return db('products')
        .where('id', id)
        .del()
}

