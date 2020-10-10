'use strict';

module.exports = (sequelize, DataTypes) => {
  const mst_peb = sequelize.define('mst_peb', {
      no_peb: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      date_peb: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      date_re: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      name_export: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      iup_op: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      shipping_name: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      shipping_id: {
        type: 'INTEGER',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      total_load: {
        type: 'DOUBLE PRECISION',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      file_form_3d: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      file_lc: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      file_roa_surveyor: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      file_shipping_instruction: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      created_by: {
        type: 'INTEGER',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      updated_by: {
        type: 'INTEGER',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      created_at: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      updated_at: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
  mst_peb.associate = function (models) {

  };
  return mst_peb;
};
