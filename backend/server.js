const app = require("./app")
require("colors")

app.listen(5000, () => {
  console.log("Server Started On Port 5000".cyan.bold.underline)
})

