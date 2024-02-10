// import express from "express";
// import morgan from "morgan";
// import router from "./server/routes/todoRoutes";
const express = require("express");
const morgan = require("morgan");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/todos", todoRoutes);

module.exports = app;
