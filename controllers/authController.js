const helpers = require('../helpers/functions')
const auth = require('../helpers/jwt');
const userRepo = require('../repository/userRepo')
const validator = require('../schema/validator')

exports.login = async (req,res,next) => {
    const data = req.body;
    try {        
      const validate = validator.login(req.body)
      if (validate.error != null ) {
        res.status(400);
        return next(validate.error);
      } 
      const findData  = await userRepo.findUserName(data.user_name)
      var stringfy = JSON.stringify(findData)
      var formatData = JSON.parse(stringfy)
      if(findData){
        const token = auth.createToken(formatData);
        if(helpers.compare(data.password,findData.password)){
          res.json({token : token.token, refresh_token : token.refresh_token , data : findData})
        }else{
          res.json({
            success : false,
            message : 'Password Salah'
          })
          res.status(401)
        }  
      }else{
        res.json({
          success : false,
          message : 'Username Tidak Ditemukan'
        })
        res.status(401)
      }

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
