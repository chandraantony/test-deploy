const shipRepo = require('../repository/shipRepo')
const model = require('../models');
const makeResponse = require('../helpers/response')

const ship = model.mst_ship;
const { sequelize, Sequelize } = require('../models');
exports.getShip = async (req,res,next) =>{
    try {
        const data = await shipRepo.findShip()     
        res.json(data) 
    } catch (error) {
        next(error);
    }
}


exports.makeResponse = async ( req,res,next) => {
    try {
        const data = await shipRepo.findShip()
        res.json(makeResponse.succes(data,true,true))

    } catch (error) {
        next(error)
    }
}