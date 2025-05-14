const express = require('express');
const router = express.Router();
const controller = require('../controller/subsubcategoryController');

router.post('/create-subsubcategory', controller.createSubsubcategory);
router.get('/get-subsubcategories', controller.getAllSubsubcategories);
router.get('/get-subsubcategory-by-id/:id', controller.getSubsubcategoryById);
router.put('/update-subsubcategory/:id', controller.updateSubsubcategory);
router.delete('/delete-subsubcategory/:id', controller.deleteSubsubcategory);

module.exports = router;
