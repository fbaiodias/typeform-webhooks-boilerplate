typeform-webhook-boilerplate
===

This is a simple boilerplate node project for [Typeform Webhooks](https://www.typeform.com/help/webhooks/). It stores the received responses on a Postgres database and lists them.

## setup

 - Install Postgres and create a database called `typeform`. *If you're on OSX, I recommend using [Postgres.app](http://postgresapp.com/) and [Postico](https://eggerapps.at/postico/).*

- Install dependencies:
```sh
npm i
```

## development

```sh
npm run dev

# gives you a localtunnel.me url which you can add to the typeform
npm run tunnel
```

## deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
