const helpers = require('../helpers/functions')
const auth = require('../helpers/jwt');
const userRepo = require('../repository/userRepo')

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

exports.register = async (req,res,next) => {
    try {
       const findData  = await userRepo.findUserName(req.body.user_name)
       if(findData){
          res.json({
              success : false,
              message : 'Username Sudah Dipakai'
          })
          res.status(400)
       }else{
          create = await userRepo.createUser(req.body)
          res.json({
              success : true,
              message : 'succeed'
          })
       }
       res.status(200)
    } catch (error) {
      next(error)
    }
}
