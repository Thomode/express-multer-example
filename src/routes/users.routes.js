const { Router } = require('express')
const User = require('../models/User')

const router = Router()

router.get('', async (req, res, next) => {
    const users = await User.findAll()

    return res.json(users)
})

const usersRouter = {
    router
}

module.exports = usersRouter