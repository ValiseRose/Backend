const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const auth = require('../middleware/auth'); // add your auth middleware

router.get('/', auth, cartController.getCart);
router.post('/add', auth, cartController.addToCart);
router.delete('/:productId', auth, cartController.removeFromCart);

module.exports = router;
