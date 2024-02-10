// import Todo from "../models/todoModel";
// import catchAsync from "../utils/catchAsync";
const catchAsync = require("./../utils/catchAsync");
const Todo = require("./../models/todoModel");

exports.getAllTodos = catchAsync(async (req, res) => {
  const todo = await Todo.find();
  console.log(todo);

  res.status(200).json({
    status: "success",
    todos: todo,
  });
});
