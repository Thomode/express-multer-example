const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const token = req.header('auth-token')

    if (!token) {
        return res.status(401).json({error: 'Access denied'})
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        console.log(verified)
        next()

    } catch (error) {
        res.status(400).json({error: 'Invalid token'})
    }
}

module.exports = validateToken