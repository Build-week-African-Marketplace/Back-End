
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

            //password --> string --> unique --> notNullable()
            users
                .string('password', 156)
                .notNullable()
                .unique();

            //First Name --> string 
            users
                .string('first_name', 156);

            //Last Name --> string 
            users
                .string('first_name', 156)

            //Email --> string --> unique
            users
                .string('first_name', 156)
                .unique();
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
                .integer()
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
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('products')
};
