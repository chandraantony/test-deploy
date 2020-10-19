const model = require('../models');
const moment  = require('moment')
const peb = model.mst_peb;
const { sequelize, Sequelize } = require('../models');
const Op = Sequelize.Op

exports.findAllData = (setting) => {
    const promise = peb.findAndCountAll({
        distinct:true,
        where : 
        Sequelize.or(
            [Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('no_peb'),),
                {[Op.substring] : setting.search.toLowerCase() }
            )],
            [Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('name_export'),),
                {[Op.substring] : setting.search.toLowerCase() }
            )],
            [Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('shipping_name'),),
                {[Op.substring] : setting.search.toLowerCase() }
            )],
            [Sequelize.where(
                Sequelize.fn('lower', Sequelize.col('iup_op'),),
                {[Op.substring] : setting.search.toLowerCase() }
            )],
            {date_re :{
                [Op.gte] :isNaN(Date.parse(setting.search)) ? null : moment(setting.search).format()
                }
            },
            {date_peb :{
                [Op.gte] :isNaN(Date.parse(setting.search)) ? null : moment(setting.search).format()
                }
            }  
        ),                     
        order:[
            ["id","ASC"]
        ],
        offset:((setting.pageNo-1)*setting.pageSize),
        limit : setting.pageSize,
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
};

exports.getAllData = () => {
    const promise = peb.findAndCountAll({
        distinct:true,
        order:[
            ["id","DESC"]
        ],
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
};

exports.findById = (id) => {
    const promise = peb.findOne({
        where : {
            id : id
        }
    })
    return promise
    .then((data) => data)
    .catch((err) => err)
}

exports.updatePeb = (id,data,session) => {
    const promise = peb.update({
        no_peb : data.no_peb,
        date_peb :	data.date_peb,	
        date_re :	data.date_re,	
        name_export :	data.name_export,	
        iup_op : data.iup_op,	
        shipping_name :	data.shipping_name,	
        total_load :	data.total_load,	
        file_form_3d :	data.file_form_3d,	
        file_lc	 :  data.file_lc,	
        file_roa_surveyor :	data.file_roa_surveyor,	
        file_shipping_instruction :	data.file_shipping_instruction,	
        updated_by : session.id,		
        updated_at : new Date()
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

exports.deletePeb = (id) => {
    const promise = peb.destroy({
        where : {
            id : id
        }
    })
    return promise
    .then((data) => data)
    .catch((err) => err)
}

exports.createPeb = (data,session) => {
    const promise = peb.create({
        no_peb : data.no_peb,
        date_peb :	data.date_peb,	
        date_re :	data.date_re,	
        name_export :	data.name_export,	
        iup_op : data.iup_op,	
        shipping_name :	data.shipping_name,	
        total_load :	data.total_load,	
        file_form_3d :	data.file_form_3d,	
        file_lc	 :  data.file_lc,	
        file_roa_surveyor :	data.file_roa_surveyor,	
        file_shipping_instruction :	data.file_shipping_instruction,	
        created_by : session.id,	
        created_at : new Date(),	
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
};

exports.rawQuery = async () => {
    const query = await sequelize.query('SELECT * FROM "mst_peb" limit 5', {
      model: order,
      mapToModel: true
    });
    return query;
  };
