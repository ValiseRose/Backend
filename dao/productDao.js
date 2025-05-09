const Product = require('../models/Product');

exports.create = async (data) => {
  const product = new Product(data);
  return await product.save();
};

exports.findAll = async () => {
  return await Product.find().populate('category subcategory');
};

exports.findById = async (id) => {
  return await Product.findById(id).populate('category subcategory');
};

exports.update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Product.findByIdAndDelete(id);
};
