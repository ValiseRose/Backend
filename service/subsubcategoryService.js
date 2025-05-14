const subsubcategoryDao = require('../dao/subsubcategoryDao');

exports.createSubsubcategory = async (data) => {
  return await subsubcategoryDao.create(data);
};

exports.getAllSubsubcategories = async () => {
  return await subsubcategoryDao.findAll();
};

exports.getSubsubcategoryById = async (id) => {
  return await subsubcategoryDao.findById(id);
};

exports.updateSubsubcategory = async (id, data) => {
  return await subsubcategoryDao.update(id, data);
};

exports.deleteSubsubcategory = async (id) => {
  return await subsubcategoryDao.remove(id);
};
