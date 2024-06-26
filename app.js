"use strict";

const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");


const app = express();

//* middleware

app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware!");
  next();
});



app.use("/digikala/users", userRouter);
app.use("/digikala/product", productRouter);
app.use("/digikala/category", categoryRouter);

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(express.json());

module.exports = app;