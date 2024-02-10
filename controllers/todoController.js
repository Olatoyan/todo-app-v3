const catchAsync = require("./../utils/catchAsync");
const Todo = require("./../models/todoModel");

exports.getAllTodos = catchAsync(async (req, res) => {
  const todo = await Todo.find();

  res.status(200).json({
    status: "success",
    results: todo.length,
    todos: todo,
  });
});

exports.createTodo = catchAsync(async (req, res) => {
  const todo = await Todo.create({
    name: req.body.name,
    completed: req.body.completed,
  });

  res.status(201).json({
    status: "success",
    todo,
  });
});
