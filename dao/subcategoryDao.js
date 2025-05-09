const Subcategory = require('../models/Subcategory');

exports.create = async (data) => {
  const Subcategory = new Product(data);
  return await Subcategory.save();
};

exports.findAll = async () => {
  return await Subcategory.find();
};

exports.findById = async (id) => {
  return await Subcategory.findById(id);
};

exports.update = async (id, data) => {
  return await Subcategory.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Subcategory.findByIdAndDelete(id);
};
