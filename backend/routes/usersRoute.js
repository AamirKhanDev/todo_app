const express = require("express")
const router = express.Router()

router.post("/register", (req, res) => { 
  res.status(200).send()
})

router.post("/login", (req, res) => { 
  res.status(200).send()
})

module.exports = router