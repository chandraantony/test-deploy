// const { findCouriers } = require("../repository/couriersRepo")
const validator = require('../schema/validator')
const Util = require('../helpers/util')

exports.cekResi = async (req,res,next) => {
    try {
        const validate = validator.formCheckAwb(req.body)
        if (validate.error != null ) {
          res.status(400);
          return next(validate.error);
        } 
        const courier = req.body.courier
        const awb = req.body.no_awb
        const checkAwb = await Util.resiCheck({courier,awb})
        res.json(checkAwb)
    } catch (error) {
        next(error)
    }
}

exports.listCourier = async (req,res,next) => {
    // const data = await findCouriers()
    const couriers = 
    [
        {
            id : '1',
            name : 'jne'
        },
        {
            id : '2',
            name : 'jnt'
        },
        {
            id : '3',
            name : 'pos'
        },
        {
            id : '4',
            name : 'sicepat'
        },
        {
            id : '5',
            name : 'wahana'
        },
        {
            id : '6',
            name : 'rpx'
        },
        {
            id : '7',
            name : 'rex'
        },
        {
            id : '8',
            name : 'dpex'
        },
        {
            id : '9',
            name : 'tiki'
        },
        {
            id : '10',
            name : 'lionparcel'
        },
        {
            id : '11',
            name : 'shipper'
        }
    ]
    res.json(couriers)
}