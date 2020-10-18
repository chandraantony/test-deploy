const rulesRepo = require('../repository/rulesRepo')
const helpers = require('../helpers/functions')

exports.addData = async (req,res,next) => {
    const session = req.session
    try {
        const data = await rulesRepo.createData(req.body,session)
        if(data){
            res.json({
                success : true,
                message : "Input Berhasil"
            })
        }
    } catch (error) {
        next(error)
    }
}

exports.deleteData = async (req,res,next) => {
    const params = req.params.id
    try {
        if(params){
            const data = await rulesRepo.deleteData(params);
            if(data){
                res.json({
                    success : true,
                    data : "Delete Succesfully"          
                })
            }else{
                res.json({
                    success : true,
                    message : 'Data not found',
                    data : {}            
                })
            }            
        }else{       
            const data = await rulesRepo.findAllData()     
            res.json({
                success : true,
                data : data            
            })
        }
    } catch (error) {
        next(error)
    }
}

exports.updateData = async (req,res,next) => {
    const params = req.params.id
    console.log(params)
    const session = req.session
    try {
        const data = await rulesRepo.findById(params);
        console.log(data)
        if(data){
            const updateData = await rulesRepo.updateData(params,req.body,session);
            if(updateData){
                res.json({
                    success : true,
                    message : 'Data Updated Succefully'
                })
            }
        }else{
            res.json({
                success : false,
                message : 'Data not found',         
            })
        }
    } catch (error) {
        next(error)
    }
}

exports.getData = async (req,res,next) => {
    const params = req.params.id
    try {
        if(params){
            const data = await rulesRepo.findById(params);
            if(data){
                res.json({
                    success : true,
                    data : data            
                })
            }else{
                res.json({
                    success : true,
                    message : 'Data not found',
                    data : {}            
                })
            }            
        }else{       
            if(req.query.search != null ||  req.query.search || undefined){
                res.json({
                    msg : 'asdad'
                })
            }else{
                const setting = helpers.paginate(req.query)
                var data = await rulesRepo.findAllData(setting)
                var info = {
                    page_size : parseInt(setting.pageSize),
                    page_no : parseInt(setting.pageNo),
                    total_page : Math.ceil(data.count / setting.pageSize)
                }
                data = {...data,...info}
                res.json({
                    success : true,
                    data : data            
                })
            } 
        }
    } catch (error) {
        next(error)
    }

}
