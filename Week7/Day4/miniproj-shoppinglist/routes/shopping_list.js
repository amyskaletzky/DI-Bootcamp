const express = require('express')

const { _insertShoppingItem,
    _getAllItems } = require('../controllers/shopping_list.js')

const router = express.Router()

router.get('/', _getAllItems)

router.post('/shop', _insertShoppingItem)

module.exports = router
