const { date } = require('joi');
const moment = require('moment');
const model = require('../models');

const peb = model.mst_peb;
const { sequelize, Sequelize } = require('../models');

exports.findAllData = () => {
    const promise = peb.findAll({})
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
        iup_op : date.iup_op,	
        shipping_name :	data.shipping_name,	
        total_load :	data.total_load,	
        file_form_3d :	data.file_form_3d,	
        file_lc	 :  data.file_lc,	
        file_roa_surveyor :	data.file_roa_surveyor,	
        file_shipping_instruction :	data.file_roa_surveyor,	
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
        iup_op : date.iup_op,	
        shipping_name :	data.shipping_name,	
        total_load :	data.total_load,	
        file_form_3d :	data.file_form_3d,	
        file_lc	 :  data.file_lc,	
        file_roa_surveyor :	data.file_roa_surveyor,	
        file_shipping_instruction :	data.file_roa_surveyor,	
        created_by : session.id,	
        created_at : new Date(),	
        updated_at : new Date()
    })
    return promise
    .then((data)=> data)
    .catch((err) => err);
};