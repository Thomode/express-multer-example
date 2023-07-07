const { Router } = require('express')
const fs = require('fs')
const uploadController = require('../controllers/upload.controller')

const router = Router()

router.post('', uploadController.upload.single('myFile'), uploadController.uploadFile)

router.get('', async (req, res) => {
    const files = fs.readdirSync('./src/public/upload')

    console.log(files)
    res.json({files})
})

const uploadRouter = {
    router
}

module.exports = uploadRouter