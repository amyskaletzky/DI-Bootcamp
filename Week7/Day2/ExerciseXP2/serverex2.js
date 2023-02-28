// Ex2
const express = require('express')
const app = express()

app.get('/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(3000, () => {
    console.log('run on port 3000')
})