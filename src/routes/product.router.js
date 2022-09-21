const express = require('express');
const router = express.Router();
const productRouter = require('../controllers/product.controller')

router.get("/",productRouter.getAllProduct)
router.delete("/product/:id",productRouter.deleteProduct)
router.post("/product",productRouter.createNewProduct)
module.exports = router