const googleAuth = require('../helpers/configGdriver')
const craeteName = require('../helpers/functions')


exports.upload = (req,res,next) => {
    res.json({
        sucess : true,
        message : 'Upload Success',
        url : req.file.path
    })
}


exports.uploadFile = (req,res,next) => {
    const { google } = require('googleapis');
    const stream = require('stream');
    // const serviceAccount = 'PATH TO SERVICE ACCOUNT';  
    let fileObject = req.file;
    console.log(fileObject.mimetype)
    let bufferStream = new stream.PassThrough();
    bufferStream.end(fileObject.buffer);
      google.drive({ version: 'v3',  auth: googleAuth.auth})
          .files.create({
              media: {
                  mimeType: fileObject.mimetype,
                  body: bufferStream
              },
              resource: {
                  name: craeteName.fileName(null,fileObject),
                  // if you want to store the file in the root, remove this parents
                  parents: ['1A0ERxvk4Wcla4j-9XOxGtCLEwftyeoUC']
              },
              fields: 'id',
          }).then(function (resp) {
              console.log(resp,'resp');
          }).catch(function (error) {
              console.log(error);
          })
      res.send('File uploaded');
}
