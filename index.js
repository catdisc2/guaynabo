const enmap = require('enmap')
const log = require("log")
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

if (config.frontend) require("./src/frontend/index.js")(fastify);

fastify.listen(8000, (err, address) => {
  if (err) log.error(err)
  log.info("Server has started")
})