const express = require("express");
const router = express.Router();

const {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  searchTodo,
} = require("../controller/todoController");

// Create
router.post("/", createTodo);

// Get All
router.get("/", getAllTodos);

// Search
router.get("/search", searchTodo);

// Update
router.put("/update/:id", updateTodo);

// Delete
router.delete("/delete/:id", deleteTodo);

module.exports = router;