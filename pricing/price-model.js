const db = require('../database/dbConfig');

module.exports = {
    get,
    getById
}

function get() {
    return db('relevantPricing as r')
    .select("r.productName","r.price", "r.image", "s.subCategoryName as subCategory", "l.locationName as location")
    .join("subCategory as s", "r.sub_id", "s.id")
    .join("location as l", "r.location_id", "l.id")
    
};

function getById(id) {
    return db('relevantPricing')
        .where(({ id }))
        .first()
}
