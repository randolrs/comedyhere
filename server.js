const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', './client/index.html'));
});

app.listen(process.env.PORT || 8080);

//server/server.js
// var express = require('express');
// var router = require('./routes/routes.js')
// var path = require('path');
// var app = express();
// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
// app.use(express.static(path.join(__dirname, '../client')));
// app.use('/', router);
module.exports=app;