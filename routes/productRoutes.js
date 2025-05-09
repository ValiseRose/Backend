const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/create-product', productController.createProduct);
router.get('/get-products', productController.getAllProducts);
router.get('/get-product/:id', productController.getProductById);
router.put('/update-product/:id', productController.updateProduct);
router.delete('/delete-product/:id', productController.deleteProduct);

module.exports = router;
