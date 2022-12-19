var express = require('express');
var router = express.Router();

const adminData = require('./admin');

/* GET product list */
router.get('/', (req, res, next) => {
    res.send(adminData.products);
});

module.exports = router;
