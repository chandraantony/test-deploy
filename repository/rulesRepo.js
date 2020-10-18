const model = require('../models');
const testModel = require('../models/mstPeb')
const rules = model.mst_rules;
const { sequelize, Sequelize } = require('../models');

exports.findAllData = (setting) => {
    const promise = rules.findAndCountAll({
        distinct:true,
        order:[
            ["id","DESC"]
        ],
        offset:((setting.pageNo-1)*setting.pageSize),
        limit : setting.pageSize,
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
};

exports.findById = (id) => {
    const promise = rules.findOne({
        where : {
            id : id
        }
    })
    return promise
    .then((data) => data)
    .catch((err) => err)
}

exports.updateData = (id,data,session) => {
    const promise = rules.update({
        name :data.name,
        descriptions : data.descriptions,
        attachment : data.attachment,		
        updated_at	: new Date(),
        updated_by	: session.id
    },
    {
        where:{
            id : id
        },
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
}

exports.deleteData = (id) => {
    const promise = rules.destroy({
        where : {
            id : id
        }
    })
    return promise
    .then((data) => data)
    .catch((err) => err)
}

exports.createData = (data,session) => {
    console.log(data)
    const promise = rules.create({
        name :data.name,
        descriptions : data.descriptions,
        attachment : data.attachment,	
        created_by : session.id,	
        created_at : new Date(),	
    })
    return promise
    .then((data)=>  data)
    .catch((err) => err);
};