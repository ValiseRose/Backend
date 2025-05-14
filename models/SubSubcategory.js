const mongoose = require('mongoose');
const slugify = require('slugify');

const subsubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory', required: true },
}, { timestamps: true });

subsubcategorySchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Subsubcategory', subsubcategorySchema);
