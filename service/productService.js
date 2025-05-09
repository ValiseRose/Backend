const productDao = require('../dao/productDao');

exports.createProduct = async (productData) => {
  return await productDao.create(productData);
};

exports.getAllProducts = async () => {
  return await productDao.findAll();
};

exports.getProductById = async (id) => {
  return await productDao.findById(id);
};

exports.updateProduct = async (id, productData) => {
  return await productDao.update(id, productData);
};

exports.deleteProduct = async (id) => {
  return await productDao.remove(id);
};
