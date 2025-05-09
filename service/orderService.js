const orderDao = require('../dao/orderDao');
const cartDao = require('../dao/cartDao');
const Product = require('../models/Product');

exports.placeOrder = async (userId, shippingAddress, paymentMethod) => {
  const cart = await cartDao.getCartByUserId(userId);
  if (!cart || cart.items.length === 0) throw new Error('Cart is empty');

  const items = await Promise.all(cart.items.map(async (item) => {
    const product = await Product.findById(item.product._id);
    return {
      product: {
        _id: product._id,
        name: product.name,
        price: product.price
      },
      quantity: item.quantity
    };
  }));

  const totalAmount = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const order = await orderDao.createOrder({
    user: userId,
    items,
    totalAmount,
    shippingAddress,
    paymentMethod,
    paymentStatus: paymentMethod === 'COD' ? 'unpaid' : 'paid' // mock logic
  });

  // Clear the cart after placing an order
  await cartDao.removeItem(userId, null); // null removes all if coded that way

  return order;
};

exports.getUserOrders = (userId) => orderDao.getOrdersByUserId(userId);
exports.getAllOrders = () => orderDao.getAllOrders();
exports.updateOrderStatus = (orderId, status) => orderDao.updateOrderStatus(orderId, status);
