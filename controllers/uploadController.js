var multer = require('multer')

exports.upload = (req,res,next) => {
    console.log(req.file.originalname )
    res.json({
        msg : 'upload file'
    })
}
