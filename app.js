const express = require('express');
const app = express();

const path = require('path');
const pathPublic = path.join(__dirname, './public');
app.use(express.static(pathPublic));

app.set('view engine', 'hbs');

const port = 4000;

app.get('/', (req, res) => {
    // res.send('Hello');
    let params = req.query;

    let email = params.user_email;
    let password = params.password;

    console.log(email, password);
    res.render('index');
})


app.listen(port, () => {
    console.log(`App started at ${port}`);
});