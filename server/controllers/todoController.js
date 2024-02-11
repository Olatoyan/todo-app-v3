const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Todo = require("./../models/todoModel");

exports.getAllTodos = catchAsync(async (req, res) => {
  const todo = await Todo.find().select("-__v");

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

exports.deleteTodo = catchAsync(async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.body.id);

  if (!todo) {
    return next(new AppError("No todo found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.editTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(
    req.body.id,
    {
      name: req.body.name,
      completed: req.body.completed,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!todo) {
    return next(new AppError("No todo found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    todo,
  });
});
