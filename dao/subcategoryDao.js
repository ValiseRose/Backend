const Subcategory = require('../models/Subcategory');
const Subsubcategory = require('../models/Subsubcategory');

exports.create = async (data) => {
  const subcategory = new Subcategory(data);
  return await subcategory.save();
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

exports.getSubcategoriesAndSubsubcategoriesByCategoryId = async (categoryId) => {
  const subcategories = await Subcategory.find({ category: categoryId });

  const result = await Promise.all(
    subcategories.map(async (subcat) => {
      const subsubcategories = await Subsubcategory.find({ subcategory: subcat._id });
      return {
        _id: subcat._id,
        name: subcat.name,
        slug: subcat.slug,
        subsubcategories,
      };
    })
  );

  return result;
};