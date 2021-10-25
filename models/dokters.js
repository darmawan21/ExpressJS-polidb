const { Sequelize, DataTypes, Model } = require('sequelize');
var koneksi = require("../koneksi.js");
const Poli = require('./polis.js');

const Dokter = koneksi.define('Dokter', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
});

Dokter.belongsTo(Poli, {foreignKey: 'idPoli'});

module.exports = Dokter;