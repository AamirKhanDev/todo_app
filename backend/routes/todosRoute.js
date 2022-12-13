const express = require("express")
const router = express.Router()
const delay = require("../middewares/delay")
const verifyToken = require("../middewares/verifyToken")


router.get("/me", verifyToken, async (req, res) => {
  try {
      const todos = await Todo.find({ userID : req.user._id })
      res.send(todos)
  } catch ({ message }) { res.status(400).send({message}) }
})


router.post("/", (req, res) => {
  res.send("This is a response from the post hello route")
})

router.put("/:id", (req,res) => {
  res.send("Hello you put something here")
})


router.delete("/:id", (req, res) => {
  res.send("Hi! You tried to delete something")
})

router.delete("/me", (req, res) => {
  res.send(todos)
})


module.exports = router
