const bcrypt = require('bcryptjs');
const saltRounds = 10;
const multer = require('multer')

function salt(val) {
    return bcrypt.hashSync(val, saltRounds)
}
  
function compare(val,hash) {
    return bcrypt.compareSync(val, hash)
}

const file = multer({})

module.exports = {
    salt,
    file,
    compare
}