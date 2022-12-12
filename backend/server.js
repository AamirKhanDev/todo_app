console.clear()
const express = require('express')
const app = express()
require("colors")
require ("dotenv").config({path: "./backend/config.env"})
const connectDB = require("./scripts/connectDB")
const getProdDetails = require("./scripts/getProdDetails")
const [PORT, isInProduction] = getProdDetails(5000)
const delay = require("./middewares/delay")

app.use(express.json())

app.use(delay(isInProduction ? 0 : 1))


app.use("/api/todos", require("./routes/todosRoute"))
app.use("/api/users", require("./routes/usersRoute"))

app.listen(PORT, () => {
  console.log("Server Started".cyan.bold.underline)
  connectDB()

  const mongoose = require("mongoose")
  const Cat = mongoose.model('Cat,', {name: String});
  const kitty = new Cat({name: 'Zildjian'});
  kitty.save().then(()=> console.log ('meow'))
})





module.exports = app;