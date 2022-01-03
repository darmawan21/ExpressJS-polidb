const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");
const Diagnosa = require('./diagnosas.js');
const Dokter = require('./dokters.js');

const Transaksi_Periksa = koneksi.define('Transaksi_Periksa', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  id_dokter: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  no_rm: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	id_diagnosa: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	biaya: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
},{
  timestamps: true,
  freezeTableName: true
});

// const Transaksi_Periksa = koneksi.define('Transaksi_Periksa', {
//   biaya: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
// }, {
//     freezeTableName: true
// }), Pasien = koneksi.define('Pasien', {
//   nama: {
//       type: DataTypes.STRING,
//       allowNull: false
//   },
//   alamat: {
//       type: DataTypes.STRING,
//       allowNull: false
//   },
//   no_telp: {
//       type: DataTypes.STRING,
//       allowNull: false
//   },
// }, {
//   timestamps: true,
//   freezeTableName: true
// });

// Transaksi_Periksa.belongsTo(Dokter, {foreignKey: 'id_dokter'});
// Transaksi_Periksa.belongsTo(Pasien, {foreignKey: 'id_pasien'});
// Transaksi_Periksa.belongsTo(Diagnosa, {foreignKey: 'id_diagnosa'});

module.exports = Transaksi_Periksa;