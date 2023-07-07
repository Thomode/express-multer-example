const { Router } = require('express')
const uploadController = require('../controllers/upload.controller')

const router = Router()

router.post('', uploadController.upload.single('myFile'), uploadController.uploadFile)

const uploadRouter = {
    router
}

module.exports = uploadRouter