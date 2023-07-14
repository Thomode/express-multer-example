const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { json } = require('sequelize')
const jwt = require('jsonwebtoken')

const router = Router()

router.post('/register', async (req, res, next) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if (user) {
        return res.status(400).json({ error: 'Registered email' })
    }

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)

    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: password
    })

    return res.json({ error: null, data: newUser })

})

router.post('/login', async (req, res, next) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if (!user) {
        return res.status(400).json({ error: 'User not found' })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if (!validPassword) {
        return res.status(400).json({ error: 'Invalid password' })
    }

    const token = jwt.sign(
        {
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id
        },
        process.env.TOKEN_SECRET
    )

    return res.header('auth-token', token).json({
        error: null,
        data: { token }
    })
})

const authRouter = {
    router
}

module.exports = authRouter