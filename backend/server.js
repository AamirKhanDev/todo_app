//We are going to keep our web server located here
const express = require('express')
const app = express ()

app.get("/", (req, res) => { // '/' is the web page or index page we will end up on when we type in localhost:5000 into the browser
  res.send("Hi I am the response") // Conventionally we will use objects, however for now we can input a string to test if it works or not
})

app.listen(5000, () => {
  console.log("Server Started On Port 5000")
})