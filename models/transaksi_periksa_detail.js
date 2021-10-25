const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");
const Tindakan_Medis = require('./tindakan_medis.js');
const Transaksi_Periksa = require('./transaksi_periksa.js');

const Transaksi_Periksa_Detail = koneksi.define('Transaksi_Periksa_Detail', {
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
});

Transaksi_Periksa_Detail.belongsTo(Transaksi_Periksa, {foreignKey: 'id_transaksi_periksa'});
Transaksi_Periksa_Detail.belongsTo(Tindakan_Medis, {foreignKey: 'id_tindakan'});


module.exports = Transaksi_Periksa_Detail;