const Product = require("../models/product.model");

// Get all products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

// Get products by category
exports.getByCategory = async (req, res) => {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.status(200).json(products);
};

// Get products by variant color
exports.getByColor = async (req, res) => {
  const { color } = req.params;
  const products = await Product.find({ "variants.color": color });
  res.status(200).json(products);
};
