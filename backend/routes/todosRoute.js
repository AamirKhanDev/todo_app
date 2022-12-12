const express = require("express")
const router = express.Router()
const delay = require("../middewares/delay")

let todos = [
  {id: 1, text: "first todo", isComplete : true},
  {id: 2, text: "second todo", isComplete : false},
  {id: 3, text: "third todo",  isComplete : true},
]

router.get("/me", delay, (req, res) => { 
  res.status(200).send(todos)
})

router.post("/", (req, res) => {
  const data = req.body
  res.send("This is a response from the post hello route")
})

router.put("/:id", (req,res) => {
  const id = req.params.id
  const body = req.body
  const todo = todos.find(t => t.id === parseInt(id))
  console.log(id, body)
  res.send("Hello you put something here")
})


router.delete("/:id", (req, res) => {
  const id = req.params.id
  const index = todos.findIndex(t => t.id === parseInt(id))
  todos.splice(index, 1)
  res.send("Hi! You tried to delete something")
})

router.delete("/me", (req, res) => {
  todos = []
  res.send(todos)
})


module.exports = router
