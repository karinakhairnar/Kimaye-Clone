const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  image: String,
  title: String,
  description: String,
  origin: String,
  price: Number,
  quantity: Number,
});

const Product = model("Products", ProductSchema);

module.exports = Product;
