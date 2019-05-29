const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');
const admin = require('./admin');

router.get('/',productsController.getProducts);

module.exports = router;