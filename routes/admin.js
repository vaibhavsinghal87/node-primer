var express = require('express');
var router = express.Router();

const products = [];

/* POST add product */
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.send('product added');
});

exports.routes = router;
exports.products = products;
