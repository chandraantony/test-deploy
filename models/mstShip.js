'use strict';

module.exports = (sequelize, DataTypes) => {
  const mstShip = sequelize.define('mst_ship', {
    id: {
        type: 'INTEGER',
        allowNull: false,
        defaultValue: 'nextval(mst_ship_id_seq::regclass)',
        comment: null,
        special: [],
        primaryKey: true,
        foreignKey: [Object]
        },
        name: {
        type: 'CHARACTER VARYING(150)',
        allowNull: true,
        defaultValue: null,
        comment: null,
        special: [],
        primaryKey: false
        },
        description: {
        type: 'CHARACTER VARYING(150)',
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
  mstShip.associate = function (models) {

  };
  return mstShip;
};
