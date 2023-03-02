const express = require('express')
const app = express()

const dotenv = require('dotenv')

const shopping_router = require('./routes/shopping_list.js')

dotenv.config()
app.use('/', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/form', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

// app.post('/shoppingList', (req, res) => {
//     console.log(req.body)
//     res.json({ item: req.body.shopping_item, amount: req.body.amount })
// })

app.use('/shoppingList', shopping_router)


app.listen(5000, () => {
    console.log('port 5000')
})