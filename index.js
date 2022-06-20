const http = require('http');
const express = require('express')

var app = express()

http.createServer(app.get('/', function(req, res) {
    res.send({
        message: 'Root'
    })}),
    app.get('/products',  function(req, res) {
        res.send({
            message: 'Products'
        })
})).listen(3000, 'localhost')

// routes.get('/products', function(req, res) {
//     res.send('Products')
// })