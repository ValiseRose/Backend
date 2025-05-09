const Category = require('../models/Category');

exports.create = async (data) => {
  const category = new Category(data);
  return await category.save();
};

exports.findAll = async () => {
  return await Category.find();
};

exports.findById = async (id) => {
  return await Category.findById(id);
};

exports.update = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Category.findByIdAndDelete(id);
};
