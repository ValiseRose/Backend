const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, unique: true },
  description: String,
  shortDescription: String,
  price: { type: Number, required: true },
  tax: { type: Number, default: 0 },
  images: [String],
  inventory: {
    type: { type: String, enum: ['simple', 'variable'], default: 'simple' },
    sku: String,
    quantity: Number,
  },
  configuration: {
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    unit: String,
    tags: [String],
    brand: String,
    associatedProducts: [mongoose.Schema.Types.ObjectId],
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' },
  seo: {
    metaTitle: String,
    metaDescription: String,
    ogImage: String,
  },
}, { timestamps: true });

productSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
