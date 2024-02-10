/* eslint-disable no-undef */
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import app from "./app.js";

const mongoose = require("mongoose");
const app = require("./app");

const dotenv = require("dotenv");

const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });
console.log(__dirname);
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION 💥 Shutting down...");

  process.exit(1);
});

// replacing the password field in the .env file with the actual password
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION 💥 Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
