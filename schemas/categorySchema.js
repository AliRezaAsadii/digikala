"use strict";

const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "a category must have name"],
    trim: true,
    unique: true,
  },
  cover: {
    type: String,
    required: [true, "a category must have cover"],
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

exports.categorySchema = categorySchema;
