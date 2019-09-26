
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
                .string('productName', 156)
                .notNullable()

            //images --> may need to change this to string or make longer length 
            products
                .binary('image', 255)

            //description --> string
            products
                .string('description', 255)

            //price --> integer --> notNullable()
            products
                .integer('price')
                .notNullable()

            //user_id FK
            products
                .integer('user_id')
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
                .string('categoryName', 156)
                .notNullable()
        })

        .createTable('subCategory', sub => {
            //id
            sub
                .increments()

            //name --> string --> notNullable 
            sub
                .string('subCategoryName', 156)

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


        .createTable('relevantPricing', pricing => {
            //id
            pricing
                .increments()

            //name --> string --> notNullable()
            pricing
                .string('productName', 156)
                .notNullable()

            //images --> may need to change this to string or make longer length 
            pricing
                .binary('image', 255)

            //price --> integer--> notNullable()
            pricing
                .integer('price')
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

            //sub_id --> FK
            pricing
                .integer('sub_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('subCategory')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            //location_id --> FK
            pricing
                .integer('location_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('location')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

        })

        .createTable('location', location=> {
            //id
            location.increments();

            //name --> string --> notNullable()
            location
                .string('locationName')
                .notNullable();
            
        })


};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('products')
        .dropTableIfExists('category')
        .dropTableIfExists('subCategory')
        .dropTableIfExists('relevantPricing')
        .dropTableIfExists('location')
};
