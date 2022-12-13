const express = require("express")
const User = require("../models/User")
const router = express.Router()
const {isEmail} = require("validator")

router.post("/register", async (req, res) => { 
    try {
      if (!isEmail(req.body.email)) throw new Error("Invalid Email entered")
      const count = await User.count({email: req.body.email})
      if (count) throw new Error ("Email is not unique!")
      const user = new User(req.body)
      await user.save()
      res.status(201).send(user)
  }   catch ({message}) {  res.status(400).send({message})
  }
 

  res.status(200).send()
})

router.post("/login", (req, res) => { 
  res.status(200).send()
})

module.exports = router 