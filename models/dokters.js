const { Sequelize, DataTypes, Model } = require('sequelize');
var koneksi = require("../koneksi.js");
const Poli = require('./polis.js');

const Dokter = koneksi.define('Dokter', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_poli: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  biaya: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
});

module.exports = Dokter;