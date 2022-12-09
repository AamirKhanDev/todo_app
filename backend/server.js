//We are going to keep our web server located here
const express = require('express')
const app = express ()

app.listen(5000, () => {
  console.log("Server Started On Port 5000")
})