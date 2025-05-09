const subcategoryDao = require('../dao/subcategoryDao');

exports.createSubcategory = async (subcategoryData) => {
  return await subcategoryDao.create(subcategoryData);
};

exports.getAllSubcategories = async () => {
  return await subcategoryDao.findAll();
};

exports.getSubcategoryById = async (id) => {
  return await subcategoryDao.findById(id);
};

exports.updateSubcategory = async (id, subcategoryData) => {
  return await subcategoryDao.update(id, subcategoryData);
};

exports.deleteSubcategorys = async (id) => {
  return await subcategoryDao.remove(id);
};
