
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {
      username:'User1',
      password:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Njk0MjcxMjIsImV4cCI6MTU2OTUxMzUyMn0.BoxiSMo8m5zEBnosn6WWqxCMIYy5J2WBkn5xZuUKpcI',
      first_name: 'admin',
      last_name: 'password',
      email: 'admin@password.com'
    },
  ])
    
};
