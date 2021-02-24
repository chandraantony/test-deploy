const googleAuth = require('../helpers/configGdriver')
const craeteName = require('../helpers/functions')

const api = {
    email : "chandra.ant@gmail.com",
    key : "AIzaSyD_fKSjIYwWlTehGB2BMthXHjgpWLWCpXs",
    scope : ["https://www.googleapis.com/auth/drive"],
    id : "webapp-292409"
}

exports.upload = (req,res,next) => {
    console.log(req.file)
    res.json({
        sucess : true,
        message : 'Upload Success',
        url : req.file.path
    })
}


exports.uploadFile = async (req,res,next) => {
      res.send('File uploaded');
}
