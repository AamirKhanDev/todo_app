console.clear()
const express = require('express')
const app = express()
require("colors")
require ("dotenv").config({path: "./backend/config.env"})
const connectDB = require("./scripts/connectDB")
const getProdDetails = require("./scripts/getProdDetails")
const [PORT] = getProdDetails(5000)

app.use(express.json())

app.use("/api/todos", require("./routes/todosRoute"))
app.use("/api/users", require("./routes/usersRoute"))

app.listen(PORT, () => {
  console.log("Server Started".cyan.bold.underline)
  connectDB()
})





module.exports = app;