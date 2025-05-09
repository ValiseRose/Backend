const mongoose = require('mongoose');
const slugify = require('slugify');

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
}, { timestamps: true });

subcategorySchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Subcategory', subcategorySchema);
