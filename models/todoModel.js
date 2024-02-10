// import mongoose from "mongoose";

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a task"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
