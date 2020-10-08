const shipRepo = require('../repository/shipRepo')
const moment = require('moment');
const model = require('../models');

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
