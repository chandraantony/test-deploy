const bcrypt = require('bcryptjs');
const saltRounds = 10;
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: '/file/peb',      
      resource_type : "raw",
      format:(req,file) => mimeType(req,file),
      public_id: (req, file) => fileName(req,file),
    }, 
});

const file = multer({storage : storage}).single('upload')

//

function paginate (params) {
    return {
        pageNo :  params.pageNo ? params.pageNo : 1,
        pageSize : params.pageSize ? params.pageSize : 5,
        search : params.search ? params.search : ''
    }
}


function salt(val) {
    return bcrypt.hashSync(val, saltRounds)
};
  
function compare(val,hash) {
    return bcrypt.compareSync(val, hash)
};

function fileName(req,file) {  
    var split = file.originalname.split('.')
    var name = split[0]+'-' + Date.now()
    return name
}

function mimeType(req,file) {
    console.log(file)
    var type = file.originalname.split('.')
    console.log(type[type.length-1])
    return type[type.length-1]
}

module.exports = {
    salt,
    paginate,
    fileName,
    file,
    compare,
}