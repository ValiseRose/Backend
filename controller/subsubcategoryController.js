const subsubcategoryService = require('../service/subsubcategoryService');

exports.createSubsubcategory = async (req, res) => {
  try {
    const subsubcategory = await subsubcategoryService.createSubsubcategory(req.body);
    res.status(201).json(subsubcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSubsubcategories = async (req, res) => {
  try {
    const list = await subsubcategoryService.getAllSubsubcategories();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubsubcategoryById = async (req, res) => {
  try {
    const subsubcategory = await subsubcategoryService.getSubsubcategoryById(req.params.id);
    if (!subsubcategory) return res.status(404).json({ message: 'Not found' });
    res.json(subsubcategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubsubcategory = async (req, res) => {
  try {
    const updated = await subsubcategoryService.updateSubsubcategory(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSubsubcategory = async (req, res) => {
  try {
    const deleted = await subsubcategoryService.deleteSubsubcategory(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
