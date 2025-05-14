const Subsubcategory = require('../models/Subsubcategory');

exports.create = async (data) => {
  const subsubcategory = new Subsubcategory(data);
  return await subsubcategory.save();
};

exports.findAll = async () => {
  return await Subsubcategory.find().populate('subcategory');
};

exports.findById = async (id) => {
  return await Subsubcategory.findById(id).populate('subcategory');
};

exports.update = async (id, data) => {
  return await Subsubcategory.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Subsubcategory.findByIdAndDelete(id);
};
