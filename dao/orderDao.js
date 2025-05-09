const Order = require('../models/Order');

exports.createOrder = (orderData) => Order.create(orderData);

exports.getOrdersByUserId = (userId) => Order.find({ user: userId });

exports.getAllOrders = () => Order.find();

exports.updateOrderStatus = (orderId, status) => 
  Order.findByIdAndUpdate(orderId, { status }, { new: true });
