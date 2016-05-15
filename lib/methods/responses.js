const Boom = require('boom')
const { Response } = require('../models')

let methods = []

function list (callback) {
  Response.findAll()
    .then(result => callback(result))
    .catch((err) => {
      console.error({ err: err }, 'error listing responses')
      callback(Boom.internal())
    })
}

function create (response, callback) {
  Response.create(response)
    .then(result => callback(result.toJSON()))
    .catch((err) => {
      console.error({ err: err }, 'error creating response')
      callback(Boom.internal())
    })
}

methods.push({ name: 'responses.list', method: list })
methods.push({ name: 'responses.create', method: create })

module.exports = methods
