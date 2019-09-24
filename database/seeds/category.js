
exports.seed = function(knex) {
  return knex('category').insert([
    {
      name:"Animal Products"
    },
    {
      name:"Beans"
    },
    {
      name:"Cereals"
    },
    {
      name:"Fruits"
    },
    {
      name:"Other"
    },
    {
      name:"Peas"
    },
    {
      name:"Roots & Tubers"
    },
    {
      name:"Seeds & Nuts"
    },
    {
      name:"Vegetables"
    }
  ])
    
};

