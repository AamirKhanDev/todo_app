const express = require("express")
const router = express.Router()

router.get("/home", (req, res) => { 
  res.status(200).send("Hello there") 
})

router.put("/putting", (req,res) => {
  res.send("Hello you put something here")
})


module.exports = router
