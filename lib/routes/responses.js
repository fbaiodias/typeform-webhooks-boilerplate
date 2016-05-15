'use strict'

const Joi = require('joi')

const routes = []

routes.push({
  method: 'POST',
  path: '/',
  config: {
    tags: ['api'],
    validate: {
      payload: Joi.object().keys({
        form_response: Joi.object().keys({
          form_id: Joi.string().required(),
          submitted_at: Joi.string().required(),
          answers: Joi.array()
        }).unknown().required()
      }).unknown()
    },
    pre: [
      { method: 'responses.create(payload.form_response)', assign: 'response' }
    ],
    handler: function (request, reply) {
      console.log(JSON.stringify(request.pre.response, null, 2))
      reply()
    },
    description: 'Typeform webhook endpoint'
  }
})

routes.push({
  method: 'GET',
  path: '/',
  config: {
    tags: ['api'],
    pre: [
      { method: 'responses.list()', assign: 'responses' }
    ],
    handler: function (request, reply) {
      reply(request.pre.responses)
    },
    description: 'Lists saved responses'
  }
})

module.exports = routes
