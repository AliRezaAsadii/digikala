"use strict";

const Product = require("./../models/productModel");

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      result: products.length,
      data: { products },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      requestAt: req.requestTime,
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};
