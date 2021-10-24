const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Poli = koneksi.define('Poli', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports = Poli;