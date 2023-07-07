const express = require('express')
const ip = require('ip')
const uploadRouter = require('./routes/upload.routes')


const PORT = 4000

const app = express()

app.use(express.json())
app.use('/upload', uploadRouter.router)
app.use('/public', express.static(__dirname + '/public'))
app.use('/files', express.static(__dirname + '/public/upload'))

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://${ip.address()}:${PORT}`)
})