const Sequelize = require('sequelize')
const path = require('path')
const config = require('../../config')

const sequelize = new Sequelize(config.sequelize.url, {
  dialect: 'postgres',
  protocol: 'postgres'
})

sequelize.sync({ force: false })

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  Response: sequelize.import(path.join(__dirname, '/response'))
}
