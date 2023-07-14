const express = require('express')
const cors = require('cors')
const uploadRouter = require('./routes/upload.routes')
const authRouter = require('./routes/auth.routes')
const validateToken = require('./middlewares/validate-token')
const userRouter = require('./routes/users.routes')


const PORT = 4000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/upload', uploadRouter.router)
app.use('/files', express.static('upload'))
app.use(express.static('public'))

app.use('/api/user', authRouter.router)
app.use('/api/users', validateToken, userRouter.router)

module.exports = app