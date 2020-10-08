const bcrypt = require('bcryptjs');
const saltRounds = 10;

function salt(val) {
    return bcrypt.hashSync(val, saltRounds)
}
  
  function compare(val,hash) {
    return bcrypt.compareSync(val, hash)
}

module.exports = {
    salt,
    compare
}