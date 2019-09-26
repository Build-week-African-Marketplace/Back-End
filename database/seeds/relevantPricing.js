
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
      image:"https://purepng.com/public/uploads/large/purepng.com-meatfood-meat-red-fresh-grill-cook-beef-steak-9415246237676ksid.png",
      price:14,
      category_id:"1",
      sub_id:"3",
      location_id:15
    },
    {
      productName:"White Millet Grain",
      image:"https://i.imgur.com/l8pXyWM.jpg",
      price:12,
      category_id:"3",
      sub_id:"8",
      location_id:6
    },
    {
      productName:"Pork Ribs",
      image:"https://i.imgur.com/fwf9TAG.jpg",
      price:16,
      category_id:"1",
      sub_id:"3",
      location_id:11
    },
    {
      productName:"Milk",
      image:"https://images.vexels.com/media/users/3/160371/isolated/preview/6c40e6ebea6870c673bc72d8f215724d-milk-box-milk-cow-illustration-by-vexels.png",
      price:5,
      category_id:"1",
      sub_id:"2",
      location_id:17
    },
    {
      productName:"Sweet Potatoes",
      image:"https://i.imgur.com/LwiGxoD.jpg",
      price:8,
      category_id:"7",
      sub_id:"19",
      location_id:2
    },
    {
      productName:"Eggs",
      image:"https://i.imgur.com/dLX75bp.jpg",
      price:3,
      category_id:"1",
      sub_id:"2",
      location_id:2
    },
    {
      productName:"Honey",
      image:"https://i.imgur.com/uSIdLgL.jpg",
      price:7,
      category_id:"1",
      sub_id:"2",
      location_id:20
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
      productName:"Pigs Feet",
      image:"https://i.imgur.com/WLSK0ou.jpg",
      price:11,
      category_id:"1",
      sub_id:"3",
      location_id:11
    },
    {
      productName:"Goats Milk",
      image:"https://i.imgur.com/4iRINNJ.jpg",
      price:7,
      category_id:"1",
      sub_id:"2",
      location_id:15
    },
    {
      productName:"Tomatoes",
      image:"https://i.imgur.com/l8Z2g9p.jpg",
      price:1,
      category_id:"9",
      sub_id:"32",
      location_id:3
    },
    {
      productName:"Cowpeas",
      image:"https://i.imgur.com/ce8syM6.jpg",
      price:9,
      category_id:"9",
      sub_id:"9",
      location_id:9
    },
    {
      productName:"Brown Rice",
      image:"https://i.imgur.com/zR5g1nX.jpg",
      price:6,
      category_id:"3",
      sub_id:"9",
      location_id:7
    },
    {
      productName:"Beef Rib",
      image:"https://i.imgur.com/fAlg5gf.jpg",
      price:12,
      category_id:"1",
      sub_id:"3",
      location_id:11
    },
    {
      productName:"Tilapia",
      image:"https://www.supremelobster.com/wp-content/uploads/tilapia.png",
      price:18,
      category_id:"1",
      sub_id:"2",
      location_id:9
    },
    {
      productName:"Wheat Bran",
      image:"https://i.imgur.com/onKQ01k.jpg",
      price:5,
      category_id:"3",
      sub_id:"11",
      location_id:22
    },
    {
      productName:"Wild Eggs",
      image:"https://i.imgur.com/skrBl9o.jpg",
      price:9,
      category_id:"1",
      sub_id:"2",
      location_id:4
    },
    {
      productName:"Brown Teff Grain",
      image:"https://i.imgur.com/4zyNfH9.jpg",
      price:11,
      category_id:"3",
      sub_id:"8",
      location_id:6
    },
    {
      productName:"Goat",
      image:"https://i.imgur.com/jApguL1.jpg",
      price:16,
      category_id:"1",
      sub_id:"3",
      location_id:15
    },
    {
      productName:"Raw Honey",
      image:"https://i.imgur.com/L65zYph.jpg",
      price:4,
      category_id:"1",
      sub_id:"2",
      location_id:6
    },
    {
      productName:"Pork Chops",
      image:"https://i.imgur.com/aN9iXqu.jpg",
      price:10,
      category_id:"1",
      sub_id:"3",
      location_id:21
    },
    {
      productName:"Perch",
      image:"https://i.imgur.com/4XDYvXi.jpg",
      price:15,
      category_id:"1",
      sub_id:"2",
      location_id:9
    },
    {
      productName:" Potatoes",
      image:"https://i.imgur.com/AyEMWdG.jpg",
      price:8,
      category_id:"7",
      sub_id:"19",
      location_id:3
    },
    {
      productName:"Turkey",
      image:"https://i.imgur.com/5aZi2JJ.jpg",
      price:21,
      category_id:"1",
      sub_id:"2",
      location_id:21
    }
  ])
    
};
