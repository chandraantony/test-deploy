var multer = require('multer')

exports.upload = (req,res,next) => {
    res.json({
        sucess : true,
        message : 'Upload Success',
        url : "test/tasdasd/asdasd",
    })
}
