
exports.up = function (knex) {
    return knex.schema
        .createTable('users', users => {
            //id
            users.increments();

            //username --> string --> unique --> notNullable()
            users
                .string('username', 156)
                .notNullable()
                .unique();

            //password --> string --> notNullable()
            users
                .string('password', 156)
                .notNullable()

            //First Name --> string 
            users
                .string('first_name', 156);

            //Last Name --> string 
            users
                .string('last_name', 156)

            //Email --> string --> unique
            users
                .string('email', 156)
                .unique()
                .notNullable()
        })

        .createTable('products', products => {
            //id
            products.increments()

            //name --> string --> notNullable()
            products
                .string('name', 156)
                .notNullable()

            //description --> string
            products
                .string('description', 255)

            //price --> integer --> notNullable()
            products
                .integer('price')
                .notNullable()

            //user_id FK
            products
                .integer('users_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

        .createTable('category', category => {
            //id
            category.increments()

            //name --> string --> notNullable 
            category
                .string('name', 156)
                .notNullable()
        })

        .createTable('sub_category', sub => {
            //id
            sub
                .increments()

            //name --> string --> notNullable 
            sub
                .string('name', 156)

            //category_id --> FK
            sub
                .integer('category_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('category')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

        .createTable('product_pricing', pricing => {
            //id
            pricing
                .increments()

            //name --> string --> notNullable()
            pricing
                .string('name', 156)
                .notNullable()

            //price --> integer--> notNullable()
            pricing
                .integer('pricing')
                .notNullable()

            //category_id --> FK
            pricing
                .integer('category_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('category')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            //sub_category_id --> FK
            pricing
                .integer('sub_category_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('sub_category')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            //location_id --> FK

        })

    //location Table?!?!!??


};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('products')
        .dropTableIfExists('category')
        .dropTableIfExists('sub_category')
        .dropTableIfExists('product_pricing')
};
