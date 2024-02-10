/* eslint-disable no-undef */
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import app from "./app.js";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });

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
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
// const server = app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
