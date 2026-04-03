const express = require("express");
const router = express.Router();

const { getTodos, createTodo, updateTodo, deleteTodo} = require("../controllers/todo.controller");
const {showLog} = require("../middlewere/log.middlewere");
const {validateTodo}= require("../middlewere/validate.Todo.middleware");
const auth= require("../middlewere/auth");

router.get("/", getTodos);
router.post("/", validateTodo,createTodo);
router.put("/:id", auth,updateTodo);     
router.delete("/:id",auth, deleteTodo); 

module.exports = router;