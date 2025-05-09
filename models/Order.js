// models/Order.js
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    price: Number
  },
  quantity: Number
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  totalAmount: Number,
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  shippingAddress: {
    line1: String,
    city: String,
    postalCode: String,
    country: String
  },
  paymentMethod: String, // 'COD', 'Stripe', etc.
  paymentStatus: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
