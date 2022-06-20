const http = require('http');
const express = require('express')

var app = express()

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

const configCors = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
};

app.options('*', configCors);
// app.use(bodyParser.json());
app.use(express.json());

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