const express = require('express');
const router = express.Router();
const subcategoryController = require('../controller/subcategoryController');

router.post('/create-subcategory', subcategoryController.createSubcategory);
router.get('/get-subcategories', subcategoryController.getAllSubcategories);
router.get('/get-subcategory/:id', subcategoryController.getSubcategoryById);
router.put('/update-subcategory/:id', subcategoryController.updateSubcategory);
router.delete('/delete-subcategory/:id', subcategoryController.deleteSubcategory);
router.get('/category/:categoryId/subcategories', subcategoryController.getSubcategoriesAndSubsubcategoriesByCategoryId);

module.exports = router;
