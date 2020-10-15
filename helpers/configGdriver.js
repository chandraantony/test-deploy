const {JWT} = require('google-auth-library');
 

const auth = new JWT(
    'chandra.ant@gmail.com',
    null,
    'revolziven1',
    ["https://www.googleapis.com/auth/drive"],
    '1A0ERxvk4Wcla4j-9XOxGtCLEwftyeoUC'
);
 
module.exports = {
    auth
}