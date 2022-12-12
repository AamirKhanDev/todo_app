const express = require("express")
const User = require("../models/User")
const router = express.Router()

router.post("/register", (req, res) => { 

  const me = new User({email: "a@a.com", password: "123456"})
  console.log(me)
  res.status(200).send()
})

router.post("/login", (req, res) => { 
  res.status(200).send()
})

module.exports = router