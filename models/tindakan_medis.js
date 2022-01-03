const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Tindakan_Medis = koneksi.define('Tindakan_Medis', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  biaya: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = Tindakan_Medis;