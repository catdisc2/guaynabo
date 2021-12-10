module.exports = function (fastify, opts, done) {
  fastify.post("/accounts/registerGJAccount.php", (req, res) => {
    console.log(req.query)
    console.log(req.body)
    res.send("-2")
  })
  
  fastify.get("/", (req, res) => {
    res.send("yass")
  })
  
  done()
}