const orderService = require('../service/orderService');

exports.placeOrder = async (req, res) => {
  try {
    const order = await orderService.placeOrder(
      req.user.id,
      req.body.shippingAddress,
      req.body.paymentMethod
    );
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await orderService.getUserOrders(req.user.id);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
