
exports.seed = function(knex) {
  return knex('products').insert([
    {
      productName:"Eggs",
      description:"Beautiful fresh farmed brown eggs.",
      price:3,
      user_id:1
    },
    {
      productName:"Beef",
      description:"Juicy slabs of beef from grass feed cows",
      price:14,
      user_id:1
    },
    {
      productName:"Milk",
      description:"Delicious from grass feed cows",
      price:14,
      user_id:1
    },
    
    {
      productName:"Honey",
      description:"Unprocessed Honey",
      price:8,
      user_id:1
    },
    
    {
      productName:"Morogoro Rice",
      description:"Unprocessed Honey",
      price:10,
      user_id:1
    },
    
  ])
    
};
