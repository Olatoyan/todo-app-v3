// import mongoose from "mongoose";

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please input a task. Task cannot be empty"],
    unique: true,
    maxLength: [25, "Task cannot be more than 15 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
