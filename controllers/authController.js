const helpers = require('../helpers/functions')
const auth = require('../helpers/jwt');
const userRepo = require('../repository/userRepo')

exports.login = async (req,res,next) => {
    const data = req.body;
    try {        
        const findData  = await userRepo.findUserName(data.user_name)
        if(findData){
          const token = auth.createToken(data);
          //const checkPassword = await userRepo.checkUnamePassword(data.user_name, data.password)
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
