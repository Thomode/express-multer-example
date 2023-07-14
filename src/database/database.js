const { Sequelize } = require('sequelize')


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/data.db'
})

module.exports = sequelize