const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

const uploadFile = (req, res) => {
    console.log(req.file)
    res.json({ data: 'Enviar archivo'})
}

const uploadController = {
    upload,
    uploadFile
}

module.exports = uploadController