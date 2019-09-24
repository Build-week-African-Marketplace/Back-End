const db = require('../database/dbConfig');

module.exports = {
    get,
    getById
}

function get() {
    return db('relevantPricing as r')
    .select("r.productName","r.price", "s.subCategoryName as subCategory", "l.locationName as location")
    .join("subCategory as s", "r.sub_id", "s.id")
    // .join("category as c", "s.category_id", "c.id")
    .join("location as l", "r.location_id", "l.id")
    
};
// "c.categoryName as category"

//this may need to change to find by name. But may be handled by front-end.
function getById(id) {
    //select * from product_pricing where id = 123 is found first
    return db('relevantPricing')
        .where(({ id }))
        .first()
}
