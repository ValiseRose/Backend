const Cart = require('../models/Cart');

exports.getCartByUserId = (userId) => Cart.findOne({ user: userId }).populate('items.product');

exports.createOrUpdateCart = async (userId, productId, quantity) => {
  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({ user: userId, items: [{ product: productId, quantity }] });
  } else {
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
  }

  cart.updatedAt = Date.now();
  return cart.save();
};

exports.removeItem = (userId, productId) => 
  Cart.findOneAndUpdate(
    { user: userId },
    { $pull: { items: { product: productId } } },
    { new: true }
  );
