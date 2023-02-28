// Ex1
const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());

app.use('/', express.static('/public'))

app.get('/', (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    console.log(user)
    res.json(user)
})

app.listen(3000, () => {
    console.log('run on port 3000');
})