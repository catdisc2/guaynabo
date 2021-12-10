const enmap = require('enmap')
const config = require("./config.json")

const fastify = require("fastify")({
  logging: true
})

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
})

const accounts = new enmap({
  name: "accounts",
  fetchAll: true,
  dataDir: "./.data"
})

fastify.register(require('./src/api/index.js'), { prefix: '/database' })

if (config.frontend) require("./src/frontend/index.js")(fastify)

fastify.listen(8000, (err, address) => {
  if (err) console.error(err)
  console.log("Server has started")
})