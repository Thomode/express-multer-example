const ip = require('ip')
const app = require('./app')
const sequelize = require('./database/database')
const User = require('./models/User')
require('dotenv').config()

const PORT = process.env.PORT 

const main = async () => {
    try {
        await sequelize.sync()
        await User.sync()

        app.listen(PORT, () => {
            console.log(`Server running on: http://${ip.address()}:${PORT}`)
        })

    } catch (error) {
        console.log('Database connection error:', error)
    } 
}

main()

