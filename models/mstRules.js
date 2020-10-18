'use strict';

module.exports = (sequelize, DataTypes) => {
  const mst_rules = sequelize.define('mst_rules', {
        name: {
          type: 'CHARACTER VARYING',
          allowNull: true,
          defaultValue: null,
          comment: null,
          special: [],
          primaryKey: false
        },
        descriptions: {
          type: 'CHARACTER VARYING',
          allowNull: true,
          defaultValue: null,
          comment: null,
          special: [],
          primaryKey: false
        },
        attachment: {
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
  mst_rules.associate = function (models) {

  };
  return mst_rules;
};


