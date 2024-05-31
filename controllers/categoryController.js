"use strict";

const Category = require("./../models/categoryModel");

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      status: "success",
      result: categories.length,
      data: { categories },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.createCategory = async (req, res) => {
  const newCategory = await Category.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        user: newCategory,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      requestAt: req.requestTime,
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(404).send(err);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      requestAt: req.requestTime,
      massage: "successful",
    });
  } catch {
    res.status(400).send(err);
  }
};
