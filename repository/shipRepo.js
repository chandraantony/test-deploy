const moment = require('moment');
const model = require('../models');

const ship = model.mstShip;
const { sequelize, Sequelize } = require('../models');

exports.findShip = () => {
    const promise = ship.findAll()
    return promise
    .then((data)=> data)
    .catch((err) => err);
};