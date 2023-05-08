const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;
const uri = process.env.MONGO_URI;

// Import the books controller
const booksController = require("./controller/books_controller.js");
app.use("/books", booksController);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Define the Express routes and start the server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
