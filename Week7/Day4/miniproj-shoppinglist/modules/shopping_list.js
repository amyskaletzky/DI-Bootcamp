const { db } = require('../config/db.js');

const getAllItems = () => {
    return db('shopping_items')
        .select('id', 'item', 'amount')

}

const insertShoppingItem = (item) => {
    return db('shopping_items')
        .insert(item)
        .returning('*')
}


module.exports = {
    insertShoppingItem,
    getAllItems
}