
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sub_category').insert([
    {
      name:"Animal Products",
      category_id:1
    },
    {
      name:"Animal Products - Other",
      category_id:1
    },
    {
      name:"Livestock",
      category_id:1
    },
    {
      name:"Poultry",
      category_id:1
    },
    {
      name:"Beans",
      category_id:2
    },
    {
      name:"Barley",
      category_id:3
    },
    {
      name:"Maize",
      category_id:3
    },
    {
      name:"Millet",
      category_id:3
    },
    {
      name:"Rice",
      category_id:3
    },
    {
      name:"Sorghum",
      category_id:3
    },
    {
      name:"Wheat",
      category_id:3
    },
    {
      name:"Fruits",
      category_id:4
    },
    {
      name:"Coffee",
      category_id:5
    },
    {
      name:"Tea",
      category_id:5
    },
    {
      name:"Tobacco",
      category_id:5
    },
    {
      name:"Vanilla",
      category_id:5
    },
    {
      name:"Peas",
      category_id:6
    },
    {
      name:"Cassava",
      category_id:7
    },
    {
      name:"Potatoes",
      category_id:7
    },
    {
      name:"Nuts",
      category_id:8
    },
    {
      name:"Sunflowers",
      category_id:8
    },
    {
      name:"Brinjals",
      category_id:9
    },
    {
      name:"Cabbages",
      category_id:9
    },
    {
      name:"Carrots",
      category_id:9
    },
    {
      name:"Cauliflower",
      category_id:9
    },
    {
      name:"Chillies",
      category_id:9
    },
    {
      name:"Cucumber",
      category_id:9
    },
    {
      name:"Ginger",
      category_id:9
    },
    {
      name:"Kales",
      category_id:9
    },
    {
      name:"Lettuce",
      category_id:9
    },
    {
      name:"Onions",
      category_id:9
    },
    {
      name:"Tomatoes",
      category_id:9
    }
  ])
    
};
