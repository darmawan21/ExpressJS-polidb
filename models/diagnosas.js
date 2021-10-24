const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Diagnosa = koneksi.define('Diagnosa', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports = Diagnosa;