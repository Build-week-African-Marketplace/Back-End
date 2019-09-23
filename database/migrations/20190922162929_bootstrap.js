
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

            //price --> integer (or decimal) --> notNullable()
            // specificType(name, type) = Sets a specific type for the column creation, if you'd like to add a column type that isn't supported here.
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

        .createTable('product_pricing', pricing => {
            //id
            pricing
                .increments()

            //name --> string --> notNullable()
            pricing
                .string('name', 156)
                .notNullable()

            //price --> integer (or decimal) --> notNullable()
            // specificType(name, type) = Sets a specific type for the column creation, if you'd like to add a column type that isn't supported here.
            pricing
                .integer('pricing')
                .notNullable()

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('products')
        .dropTableIfExists('product_pricing')
};
