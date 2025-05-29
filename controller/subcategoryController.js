const subcategoryService = require('../service/subcategoryService');

exports.createSubcategory= async (req, res) => {
  try {
    const subcategory = await subcategoryService.createSubcategory(req.body);
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await subcategoryService.getAllSubcategories();
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubcategoryById = async (req, res) => {
  try {
    const subcategory = await subcategoryService.getSubcategoryById(req.params.id);
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(subcategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubcategory = async (req, res) => {
  try {
    const updatedSubcategory = await subcategoryService.updateSubcategory(req.params.id, req.body);
    if (!updatedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(updatedSubcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSubcategory = async (req, res) => {
  try {
    const deleted = await subcategoryService.deleteSubcategorys(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Subcategory not found' });
    res.json({ message: 'Subcategory deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getSubcategoriesAndSubsubcategoriesByCategoryId = async (req, res) => {
  try {
    const result = await subcategoryService.getSubcategoriesAndSubsubcategoriesByCategoryId(req.params.categoryId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};