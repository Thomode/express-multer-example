const { Router } = require('express')
const fs = require('fs')
const uploadController = require('../controllers/upload.controller')

const router = Router()

router.post('', uploadController.upload.single('myFile'), uploadController.uploadFile)

router.get('', uploadController.getFiles)

const uploadRouter = {
    router
}

module.exports = uploadRouter