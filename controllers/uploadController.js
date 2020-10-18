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
    // const { google } = require('googleapis');
    // const stream = require('stream');
    // const {JWT} = require('google-auth-library');
    // var secretMemek = api.key.replace(new RegExp("\\\\n", "\g"), "\n")
    // console.log(secretMemek)
    // // const serviceAccount = 'PATH TO SERVICE ACCOUNT';  
    // let fileObject = req.file;
    // let bufferStream = new stream.PassThrough();
    // // bufferStream.end(fileObject.buffer);
    // //   const jWTClient = new google.auth.JWT(
    // //   "andikaherup@gmail.com",
    // //   null,
    // //   api.key,
    // //   ['https://www.googleapis.com/auth/drive']
    // //   )
    // //   google.drive({ version: 'v3'})
    // //       .files.create({
    // //           auth: jWTClient,
    // //           media: {
    // //               mimeType: 'application/pdf',
    // //               body: bufferStream
    // //           },
    // //           resource: {
    // //               name: 'test.pdf',
    // //               // if you want to store the file in the root, remove this parents
    // //               parents: ['H_ljJJa-zy0bLHkUOTP-2CKIe2LK1AZC']
    // //           },
    // //           fields: 'id',
    // //       }).then(function (resp) {
    // //           console.log(resp,'resp');
    // //       }).catch(function (error) {
    // //           console.log(error);
    // //       })
    //     const client = new JWT({
    //     email: api.email,
    //     key: secretMemek,
    //     scopes: ['https://www.googleapis.com/auth/drive'],
    //     });
    //     const url = `https://dns.googleapis.com/dns/v1/projects/${api.id}`;
    //     const test = await client.request({url});
    //     console.log(test.data);
      res.send('File uploaded');
  
}
