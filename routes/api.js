
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/product');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

//Category
/*var Category = require('../models/category');
Category.methods(['get', 'put', 'post', 'delete']);
Category.register(router, '/category');
*/
// Return router
module.exports = router;
