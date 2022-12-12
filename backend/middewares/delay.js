module.exports = function delay (req, res, next) {
  setTimeout(() => {
    console.log("Delay middleware function run")
    next()
  })
  

}