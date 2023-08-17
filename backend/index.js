const express = require('express');
const app = express();
const config = require('./config');
const Item = require('./models/item');
const User = require('./models/user');

//Test MariaDb connection
config.authenticate().then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err);
});

//Get all items 
app.get('/items', function(req, res){
    Item.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

//Get all users 
app.get('/users', function(req, res){
    User.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(8000, function(){
    console.log('Server running on port 8000...');
});