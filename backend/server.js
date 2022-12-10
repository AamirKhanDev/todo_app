console.clear()
const express = require('express')
const app = express ()
require("colors")
require ("dotenv").config({path: "./backend/config.env"})
const connectDB = require("./scripts/connectDB")
const getProdDetails = require("./scripts/getProdDetails")
const [PORT, isInProduction] = getProdDetails(5000)


app.get("/home", (req, res) => { 
  res.status(200).send("Hello there") 
})

app.put("/putting", (req,res) => {
  res.send("Hello you put something here")
})

app.listen(PORT, () => {
  console.log("Server Started".cyan.bold.underline)
  connectDB()
})





module.exports = app;