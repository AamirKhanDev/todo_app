const express = require("express")
const User = require("../models/User")
const router = express.Router()
const {isEmail} = require("validator")
const {genSaltSync, hashSync} = require("bcryptjs")

router.post("/register", async (req, res) => { 
    try {
      if (!isEmail(req.body.email)) throw new Error("Invalid Email entered")
      const count = await User.count({email: req.body.email})
      if (count) throw new Error ("Email is not unique!")
      const user = new User(req.body)
      //encrypt password then save
      user.password = hashSync(user.password, genSaltSync(+process.env.SALT_ROUNDS));
      //saves user registered
      await user.save()
      res.status(201).send(user)
  }   catch ({message}) {  res.status(400).send({message})
  }

})

router.post("/login", (req, res) => { 
  res.status(200).send()
})

module.exports = router 