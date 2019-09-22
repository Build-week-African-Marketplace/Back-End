
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
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
