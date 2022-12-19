var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const expressOasGenerator = require('express-oas-generator');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var productRouter = require('./routes/products');

var app = express();
expressOasGenerator.init(app, {});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/admin', adminRouter.routes);
app.use('/products', productRouter);
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

module.exports = app;
