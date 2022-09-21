const express = require('express');
const router = express.Router();
const cartCtrl = require('../controllers/cart.controller')
router.put('/cart',cartCtrl.addToCart)
module.exports = router