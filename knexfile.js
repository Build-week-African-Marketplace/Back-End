// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/users.db3'
    },
    //Don't know if this will work for foreign keys when using seed data
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done);
    //   },
    // },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  //need to watch videos. May need to change the connection and client values that are set up  for postgress. These may need to be different for first time production setup with heroku
  //npx heroku run knex migrate:latest -a name_of_heroku api
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/users.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },  

};
