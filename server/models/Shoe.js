  const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  rating: Number,
  image: String,
  features: [String],
  saleStatus: String,
  description: String,
});

module.exports = mongoose.model("Shoe", ShoeSchema);
