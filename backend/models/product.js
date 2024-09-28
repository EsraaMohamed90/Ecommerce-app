const mongoose = require('mongoose');

// Define the dimensions schema
const dimensionsSchema = new mongoose.Schema({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  depth: { type: Number, required: true }
});

// Define the reviews schema
const reviewSchema = new mongoose.Schema({
  reviewerName: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now }
});

// Optionally define the meta schema (if needed)
const metaSchema = new mongoose.Schema({
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Now use it in ProductSchema
let ProductSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  tags: [{ type: String }],
  brand: { type: String, required: true },
  sku: { type: String, required: true },
  weight: { type: Number, required: true },
  dimensions: dimensionsSchema,  // Use dimensionsSchema here
  warrantyInformation: { type: String },
  shippingInformation: { type: String },
  availabilityStatus: { type: String },
  reviews: [reviewSchema],  // Use reviewSchema here
  returnPolicy: { type: String },
  minimumOrderQuantity: { type: Number },
  meta: metaSchema,  // Ensure metaSchema is defined or comment it out if unused
  images: [{ type: String }],
  thumbnail: { type: String },
  incart: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', ProductSchema);
