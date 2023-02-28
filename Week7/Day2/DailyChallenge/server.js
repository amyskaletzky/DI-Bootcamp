const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby;
    if (isNaN(hobby)) {
        return res.status(200).send(hobby);
    }
    res.status(404).send('hobby not found');

})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form.html')

})

app.post('/formData', (req, res) => {
    res.json(req.body)
    // res.json(req.body.email + ' ' + req.body.message)
})


app.listen(5000, () => {
    console.log('run on port 3000');
})