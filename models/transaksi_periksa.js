const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");
const Diagnosa = require('./diagnosas.js');
const Dokter = require('./dokters.js');

const Transaksi_Periksa = koneksi.define('Transaksi_Periksa', {
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
}), Pasien = koneksi.define('Pasien', {
  nama: {
      type: DataTypes.STRING,
      allowNull: false
  },
  alamat: {
      type: DataTypes.STRING,
      allowNull: false
  },
  no_telp: {
      type: DataTypes.STRING,
      allowNull: false
  },
}, {
  freezeTableName: true
});

Transaksi_Periksa.belongsTo(Dokter, {foreignKey: 'id_dokter'});
Transaksi_Periksa.belongsTo(Pasien, {foreignKey: 'id_pasien'});
Transaksi_Periksa.belongsTo(Diagnosa, {foreignKey: 'id_diagnosa'});

module.exports = Transaksi_Periksa;