'use strict';

module.exports = (sequelize, DataTypes) => {
  const mst_couriers = sequelize.define('mst_couriers', {
    id: {
        type: 'INTEGER',
        allowNull: false,
        defaultValue: 'nextval(mst_couriers_id_seq::regclass)',
        comment: null,
        special: [],
        primaryKey: true
      },
      name: {
        type: 'CHARACTER VARYING',
        allowNull: false,
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
    mst_couriers.associate = function (models) {

  };
  return mst_couriers;
};


