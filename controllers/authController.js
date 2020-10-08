const helpers = require('../helpers/functions')
const auth = require('../helpers/jwt');

exports.login = (req,res,next) => {
    try {
        const data = req.body;
        console.log(req.body.user_name)
        console.log(helpers.salt(req.body.password))
        const token = auth.createToken(data);
        res.json(token);
      } catch (error) {
        next(error);
      }    
}

exports.registrer = (req,res,next) => {
    res.json({
        msg : 'register'
    })
}
