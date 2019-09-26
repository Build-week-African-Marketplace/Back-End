
exports.seed = function(knex) {
  return knex('relevantPricing').insert([
    {
      productName:"Wheat Flour",
      image:"http://agrodaily.com/wp-content/uploads/2016/04/wheat.png",
      price:4,
      category_id:"3",
      sub_id:"11",
      location_id:15
    },
    {
      productName:"Beef",
      image:"https://p7.hiclipart.com/preview/497/952/940/roast-beef-london-broil-pot-roast-round-steak-rump-steak-meat.jpg",
      price:12,
      category_id:"1",
      sub_id:"3",
      location_id:15
    },
    {
      productName:"Milk",
      image:"https://i7.pngguru.com/preview/497/643/804/photo-on-a-milk-carton-photo-on-a-milk-carton-royalty-free-vector-food-milk.jpg",
      price:5,
      category_id:"1",
      sub_id:"2",
      location_id:15
    },
    {
      productName:"Sweet Potatoes",
      image:"https://p7.hiclipart.com/preview/360/470/550/sweet-potato-vegetable-yam-organic-food-sweet-potato.jpg",
      price:8,
      category_id:"7",
      sub_id:"19",
      location_id:2
    },
    {
      productName:"Eggs",
      image:"http://www.pngplay.com/wp-content/uploads/2/Eggs-Transparent-Background.png",
      price:3,
      category_id:"1",
      sub_id:"2",
      location_id:2
    },
    {
      productName:"Honey",
      image:"http://www.pngplay.com/wp-content/uploads/1/Honey-PNG-Image.png",
      price:7,
      category_id:"1",
      sub_id:"2",
      location_id:6
    },
    {
      productName:"Millet Grain",
      image:"https://www.pngarts.com/files/5/Millet-PNG-Download-Image.png",
      price:15,
      category_id:"3",
      sub_id:"8",
      location_id:6
    },
    {
      productName:"Tomatoes",
      image:"https://www.pinclipart.com/picdir/middle/363-3631339_free-png-download-tomato-transparent-png-images-background.png",
      price:1,
      category_id:"9",
      sub_id:"32",
      location_id:9
    },
    {
      productName:"Cowpeas",
      image:"https://library.kissclipart.com/20190512/fae/kissclipart-green-bean-olive-common-bean-color-b7573b82b1f76cdd.png",
      price:9,
      category_id:"9",
      sub_id:"9",
      location_id:9
    },
    {
      productName:"Tilapia",
      image:"https://images.app.goo.gl/aAnCwm8urrez7UwG6 ",
      price:18,
      category_id:"1",
      sub_id:"2",
      location_id:9
    },
  ])
    
};
