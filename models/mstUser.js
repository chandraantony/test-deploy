'use strict';

module.exports = (sequelize, DataTypes) => {
  const mst_user = sequelize.define('mst_user', {
      email: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      full_name: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      user_name: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      password: {
        type: 'CHARACTER VARYING',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
      },
      is_admin: {
        type: 'SMALLINT',
        allowNull: true,
        defaultValue: '0',
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
  mst_user.associate = function (models) {

  };
  return mst_user;
};
