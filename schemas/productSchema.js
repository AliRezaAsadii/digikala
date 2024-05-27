"use strict";

const mongoose = require("mongoose");
const joi = require("joi");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A product most have name"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "A product most have price"],
  },
  category: {
    type: Number,
    trim: true,
    required: [true, "A product most have category"],
  },
  discount: {
    type: Number,
    trim: true,
  },
  attributes: [Object],
  comments: [Object],
  questions: [Object],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  cover: [joi.string().required()],
  image: [joi.string()],
  sellers: [joi.object().required()],
  digiClubPoint: {
    type: Number,
    trim: true,
  },
  warranty: {
    type: String,
  },
});

exports.productSchema = productSchema