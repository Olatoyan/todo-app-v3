const express = require("express");
const morgan = require("morgan");
const todoRoutes = require("./routes/todoRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/todos", todoRoutes);

app.use(globalErrorHandler);

module.exports = app;
