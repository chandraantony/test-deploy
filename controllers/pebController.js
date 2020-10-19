const pebRepo = require('../repository/pebRepo')
const helpers = require('../helpers/functions')

exports.addPEB = async (req,res,next) => {
    const session = req.session
    try {
        const data = await pebRepo.createPeb(req.body,session)
        res.json({
            success : true,
            message : "Input Berhasil"
        })
    } catch (error) {
        next(error)
    }
}

exports.deletePeb = async (req,res,next) => {
    const params = req.params.id
    try {
        const data = await pebRepo.findById(params);
        if(data){
            const deleteData = await pebRepo.deletePeb(params);
            if(deleteData){
                res.json({
                    success : true,
                    message : 'Data Deleted Succefully'
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

exports.updatePeb = async (req,res,next) => {
    const params = req.params.id
    const session = req.session
    try {
        const data = await pebRepo.findById(params);
        if(data){
            const updateData = await pebRepo.updatePeb(params,req.body,session);
            console.log(updateData)
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

exports.dataPeb = async (req,res,next) => {
    const params = req.params.id
    try {
        if(params){
            const data = await pebRepo.findById(params);
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
            // if(req.query.search != null){
            //     res.json({
            //         msg : 'asdad'
            //     })
            // }else{
                const setting = helpers.paginate(req.query)
                if(setting.pageNo > 0){
                    var data = await pebRepo.findAllData(setting)
                }else{
                    var data = await pebRepo.getAllData(setting)
                }
                var info = {
                    page_size : setting.pageNo > 0 ? parseInt(setting.pageSize) : data.count,
                    page_no : parseInt(setting.pageNo),
                    total_page : setting.pageNo > 0? Math.ceil(data.count / setting.pageSize) :1
                }
                data = {...data,...info}
                res.json({
                    success : true,
                    data : data            
                })
            // } 
        }
    } catch (error) {
        next(error)
    }

}