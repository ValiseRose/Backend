const categoryDao = require('../dao/categoryDao');

exports.createCategory = async (categoryData) => {
  return await categoryDao.create(categoryData);
};

exports.getAllCategories = async () => {
  return await categoryDao.findAll();
};

exports.getCategoryById = async (id) => {
  return await categoryDao.findById(id);
};

exports.updateCategory = async (id, categoryData) => {
  return await categoryDao.update(id, categoryData);
};

exports.deleteCategory = async (id) => {
  return await categoryDao.remove(id);
};
