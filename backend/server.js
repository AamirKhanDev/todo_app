const express = require('express')
const app = express ()
require("colors")
require ("dotenv").config({path: "./backend/config.env"})

const [PORT, isInProduction] = require("./scripts/getProdDetails")(8000)

console.log({PORT, isInProduction})

app.get("/home", (req, res) => { 
  res.status(200).send("Hello there") 
})


app.listen(PORT, () => {
  console.log("Server Started on Port 8000".cyan.bold.underline)
})





module.exports = app;