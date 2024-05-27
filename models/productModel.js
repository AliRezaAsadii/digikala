"use strict";

const mongoose = require("mongoose");
const { productSchema } = require("./../schemas/productSchema");

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
