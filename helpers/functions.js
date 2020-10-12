const bcrypt = require('bcryptjs');
const saltRounds = 10;
const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { get } = require('../src/api/auth');

function salt(val) {
    return bcrypt.hashSync(val, saltRounds)
};
  
function compare(val,hash) {
    return bcrypt.compareSync(val, hash)
};

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

function fileName(req,file) {
    var name = file.originalname+'-' + Date.now()
    return name
}

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: '/file/peb',
      public_id: (req, file) => fileName(req,file),
    }, 
});

const file = multer({storage : storage}).single('upload')

module.exports = {
    salt,
    file,
    compare
}