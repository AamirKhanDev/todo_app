const express = require("express")
const router = express.Router()
const verifyToken = require("../middewares/verifyToken")


router.get("/me", verifyToken, async (req, res) => {
  try {
      const todos = await Todo.find({ userID : req.user._id })
      res.send(todos)
  } catch ({ message }) { res.status(400).send({message}) }
})


router.post("/", verifyToken, async (req, res) => {
  try {
    const todo = new Todo ({...req.body, userID : req.user._id})
    await todo.save()
    res.status(201).send(todo)
  } catch ({ message }) { res.status(400).send({message}) }

})

router.put("/:id", verifyToken, (req,res) => {
  res.send("Hello you put something here")
})


router.delete("/:id", verifyToken, (req, res) => {
  res.send("Hi! You tried to delete something")
})

router.delete("/me", verifyToken, (req, res) => {
  res.send(todos)
})


module.exports = router
