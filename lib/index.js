'use strict'

const Hapi = require('hapi')
const config = require('../config')
const methods = require('./methods')
const routes = require('./routes')

const server = new Hapi.Server()
server.connection(config.hapi)

server.register([
  require('inert'),
  require('vision'),
  { register: require('hapi-swagger'), options: config.swagger }
])

server.method(methods)
server.route(routes)

server.start((err) => {
  if (err) {
    throw err
  }

  console.log('Server running at:', server.info.uri)
})
