"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    minlength: [3, "A username must have more or equal then 15 characters"],
    maxlength: [
      15,
      "A user firstName must have less or equal then 15 characters",
    ],
  },
  lastName: {
    type: String,
    trim: true,
    minlength: [3, "A username must have more or equal then 15 characters"],
    maxlength: [
      15,
      "A user lastName must have less or equal then 15 characters",
    ],
  },
  username: {
    type: String,
    required: [true, "A user most have username"],
    unique: true,
    minlength: [6, "A username must have more or equal then 6 characters"],
    maxlength: [20, "A username must have less or equal then 20 characters"],
  },
  rule: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "You can only enter: user and admin",
    },
  },
  email: {
    type: String,
    required: [true, "A user most have email address"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, "A password must have more or equal then 8 characters"],
    maxlength: [20, "A password must have less or equal then 20 characters"],
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

exports.userSchema = userSchema;
