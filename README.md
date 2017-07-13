# typeform-webhook-boilerplate

A simple boilerplate node project for [Typeform Webhooks](https://www.typeform.com/help/webhooks/). It stores the received responses on a [PostgreSQL](https://www.postgresql.org/) database and lists them.

## Setup

 - Install [PostgreSQL](https://www.postgresql.org/) and create a database called `typeform`. *If you're on OSX, I recommend using [Postgres.app](http://postgresapp.com/) and [Postico](https://eggerapps.at/postico/).*

- Install dependencies:
```sh
npm i
```

### Development

```sh
npm run dev

# gives you a localtunnel.me url which you can add to the typeform
npm run tunnel
```

### Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Credits

Built by [@fbaiodias](https://github.com/fbaiodias)

#### Contributors

[@evaame](https://github.com/evaame) - documentation
