const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin'); // optional

router.post('/', auth, orderController.placeOrder);
router.get('/', auth, orderController.getMyOrders);

router.get('/admin', auth, admin, orderController.getAllOrders);
router.put('/admin/:id/status', auth, admin, orderController.updateOrderStatus);

module.exports = router;
