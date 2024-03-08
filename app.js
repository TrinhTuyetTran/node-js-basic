var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var infoRouter = require('./routes/info');
var defaultRouter = require('./routes/default');
var fundamentals = require('./routes/fundamentals');
var async = require('./routes/async-await');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/info', infoRouter);
app.use('*', defaultRouter);
// app.use('*', fundamentals);
// app.use('*',async);
module.exports = app;
