module.exports = function (seconds=1) {
    return function delay (req, res, next) {
    setTimeout(next, seconds * 1000)
  }
}