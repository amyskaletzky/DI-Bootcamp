const { insertShoppingItem,
    getAllItems } = require('../modules/shopping_list.js')

const _insertShoppingItem = (req, res) => {
    insertShoppingItem(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err));
}

const _getAllItems = (req, res) => {
    getAllItems()
        .then(data => res.json(data))
        .catch(err => console.log(err));
}

module.exports = {
    _insertShoppingItem,
    _getAllItems
}