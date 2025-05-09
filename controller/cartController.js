const cartService = require('../service/cartService');

exports.getCart = async (req, res) => {
  try {
    const cart = await cartService.getCart(req.user.id);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cart = await cartService.addToCart(req.user.id, productId, quantity);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const cart = await cartService.removeFromCart(req.user.id, req.params.productId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
