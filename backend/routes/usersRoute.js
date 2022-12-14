const express = require("express")
const User = require("../models/User")
const router = express.Router()
const {isEmail} = require("validator")
const {genSaltSync, hashSync, compareSync} = require("bcryptjs")
const verifyToken = require("../middlewares/verifyToken")
const createAuthResObj = require("../scripts/createAuthResObj")


router.post("/register", async (req, res) => { 
    try {
      if (!isEmail(req.body.email)) throw new Error("Invalid Email entered")
      const count = await User.count({email: req.body.email})
      if (count) throw new Error ("Email is not unique!")
      const user = new User(req.body)
      if (user.password.length < 5) throw new Error("Password is too short")
      //encrypt password then save
      user.password = hashSync(user.password, genSaltSync(+process.env.SALT_ROUNDS));
      //saves user registered
      await user.save()
      res.status(201).send(createAuthResObject(user))
  }   catch ({message}) {  res.status(400).send({message})
  }

})

router.post("/login", async (req, res) => { 
  try {
    const user = User.findOne({email: req.body.email})
    if (!user) throw new Error ("No user found")

    const passwordIsValid = compareSync(password, user.password)

    res.send(user)
  } catch ({message}) {  res.status(404).send({message})
  }
})

module.exports = router 