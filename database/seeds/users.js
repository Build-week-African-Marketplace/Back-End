
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username:'User1',
      password:'password',
      first_name: 'admin',
      last_name: 'password',
      email: 'admin@password.com'
    },
  ])
    
};
