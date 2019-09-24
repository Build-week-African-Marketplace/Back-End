
exports.seed = function(knex) {
  return knex('category').insert([
    {
      categoryName:"Animal Products"
    },
    {
      categoryName:"Beans"
    },
    {
      categoryName:"Cereals"
    },
    {
      categoryName:"Fruits"
    },
    {
      categoryName:"Other"
    },
    {
      categoryName:"Peas"
    },
    {
      categoryName:"Roots & Tubers"
    },
    {
      categoryName:"Seeds & Nuts"
    },
    {
      categoryName:"Vegetables"
    }
  ])
    
};

