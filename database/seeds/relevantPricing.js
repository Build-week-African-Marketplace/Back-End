
exports.seed = function(knex) {
  return knex('relevantPricing').insert([
    {
      productName:"Wheat Flour",
      image:"https://images.app.goo.gl/sDsbwFRQZmsj7tK76",
      price:4,
      category_id:"3",
      sub_id:"11",
      location_id:15
    },
    {
      productName:"Beef",
      image:"https://images.app.https://images.app.goo.gl/dnHwXGn6jZEczvY68.gl/sDsbwFRQZmsj7tK76",
      price:12,
      category_id:"1",
      sub_id:"3",
      location_id:15
    },
    {
      productName:"Milk",
      image:"https://images.app.goo.gl/5RZLSz4oJ957QxMG9",
      price:5,
      category_id:"1",
      sub_id:"2",
      location_id:15
    },
    {
      productName:"Sweet Potatoes",
      image:"https://images.app.goo.gl/6gAutFL1KHZFpzDH6",
      price:8,
      category_id:"7",
      sub_id:"19",
      location_id:2
    },
    {
      productName:"Eggs",
      image:"https://images.app.goo.gl/F26KYRbYQNYU9h6J7",
      price:3,
      category_id:"1",
      sub_id:"2",
      location_id:2
    },
    {
      productName:"Honey",
      image:"https://images.app.goo.gl/smykskFgWeiSPCMFA",
      price:7,
      category_id:"1",
      sub_id:"2",
      location_id:6
    },
    {
      productName:"Millet Grain",
      image:"https://images.app.goo.gl/dSmnw3MVbmBKq9QR6",
      price:15,
      category_id:"3",
      sub_id:"8",
      location_id:6
    },
    {
      productName:"Tomatoes",
      image:"https://images.app.goo.gl/NxD2WKeLAy1PnEa8A",
      price:1,
      category_id:"9",
      sub_id:"32",
      location_id:9
    },
    {
      productName:"Cowpeas",
      image:"https://images.app.goo.gl/aAnCwm8urrez7UwG6",
      price:9,
      category_id:"9",
      sub_id:"9",
      location_id:9
    },
    {
      productName:"Tilapia",
      image:"https://images.app.goo.gl/Lju7QBZ9gLXWcMdq8",
      price:18,
      category_id:"1",
      sub_id:"2",
      location_id:9
    },
  ])
    
};
