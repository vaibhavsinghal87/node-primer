var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const expressOasGenerator = require('express-oas-generator');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
expressOasGenerator.init(app, {});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
