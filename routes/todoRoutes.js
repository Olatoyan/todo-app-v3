// import express from "express";
const express = require("express");
const { getAllTodos } = require("./../controllers/todoController");
// import { getAllTodos } from "../controllers/todoController";

const router = express.Router();

router.route("/").get(getAllTodos);

module.exports = router;
