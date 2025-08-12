const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customerInfo: {
    name:    { type: String, required: true },
    email:   {
      type: String,
      required: true,
      // Uncomment the line below for optional email validation
      // match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    phone:   { type: String, required: true },
    address: { type: String, required: true },
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name:     { type: String, required: true },
    price:    { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: [0, 'Total amount cannot be negative'],
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  // note: { type: String }, // (optional enhancement)
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
