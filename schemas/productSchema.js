"use strict";

const mongoose = require("mongoose");
const joi = require("joi");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A product most have name"],
    minlength: [3, "A product must have more or equal then 3 characters"],
    maxlength: [20, "A username must have less or equal then 20 characters"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "A product most have price"],
    min: [4, "A price must have more or equal then 3 characters"],
    max: [11, "A price must have less or equal then 11 characters"],
  },
  category: {
    type: Number,
    trim: true,
    required: [true, "A product most have category"],
  },
  discount: {
    type: Number,
    trim: true,
    min: [4, "A discount must have more or equal then 3 characters"],
    max: [11, "A discount must have less or equal then 11 characters"],
  },
  attributes: [Object],
  comments: [Object],
  questions: [Object],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  // cover: [joi.String().required()],
  // image: [joi.String()],
  // sellers: [joi.Object().required()],
  digiClubPoint: {
    type: Number,
    trim: true,
  },
  warranty: {
    type: String,
  },
});

exports.productSchema = productSchema;
