
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username:'admin',
      password:'password',
      first_name: 'admin',
      last_name: 'password',
      email: 'admin@password.com'
    }
  ])
    
};
