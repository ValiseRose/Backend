const cartDao = require('../dao/cartDao');

exports.getCart = async (userId) => cartDao.getCartByUserId(userId);

exports.addToCart = async (userId, productId, quantity) =>
  cartDao.createOrUpdateCart(userId, productId, quantity);

exports.removeFromCart = async (userId, productId) =>
  cartDao.removeItem(userId, productId);
