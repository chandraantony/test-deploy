const moment = require('moment');
const model = require('../models');
const helpers = require('../helpers/functions')

const user = model.mst_user;
const { sequelize, Sequelize } = require('../models');

exports.createUser = (data) => {
    const email  = data.email
    const fullName = data.full_name
    const userName = data.user_name
    const password = helpers.salt(data.password)
    const promise = user.create({
        email : email,
        full_name : fullName,
        user_name : userName,
        password : password,
        created_at : new Date(),
        updated_at : new Date()
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
};

exports.findUserName = (data) => {
    const promise = user.findOne({
        where : {
            user_name : data
        }
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
}

exports.checkUnamePassword = (userName,password) => {
    const promise = user.findOne({
        where : {
            user_name : userName,
            password : password
        }
    })

    return promise
    .then((data)=> data)
    .catch((err) => err);
}
