const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Tindakan_Medis = koneksi.define('Tindakan_Medis', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
    freezeTableName: true
});

module.exports = Tindakan_Medis;