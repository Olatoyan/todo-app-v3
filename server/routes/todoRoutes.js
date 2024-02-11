const express = require("express");
const todoController = require("./../controllers/todoController");

const { getAllTodos, createTodo, deleteTodo, editTodo } = todoController;

const router = express.Router();

router
  .route("/")
  .get(getAllTodos)
  .post(createTodo)
  .delete(deleteTodo)
  .patch(editTodo);

router.route("/:type").get(getAllTodos);

module.exports = router;
