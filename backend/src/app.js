const express= require("express")

const app = express()

const todoRoutes = require("./routes/todo.routes")

app.use(express.join())

app.use("/api/todos", todoRoutes)

module.exports= app