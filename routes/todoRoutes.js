// import express from "express";
const express = require("express");
const todoController = require("./../controllers/todoController");

const { getAllTodos, createTodo } = todoController;

const router = express.Router();

router.route("/").get(getAllTodos).post(createTodo);

module.exports = router;
