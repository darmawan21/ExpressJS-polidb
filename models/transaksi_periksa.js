const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transaksi_Periksa = koneksi.define('Transaksi_Periksa', {
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
}), Dokter = koneksi.define('dokter', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    biaya: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}), Pasien = koneksi.define('pasien', {
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
}), Diagnosa = koneksi.define('diagnosa', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Transaksi_Periksa.belongsTo(Dokter, {foreignKey: 'id_dokter'});
Transaksi_Periksa.belongsTo(Pasien, {foreignKey: 'id_pasien'});
Transaksi_Periksa.belongsTo(Diagnosa, {foreignKey: 'id_diagnosa'});

module.exports = Transaksi_Periksa;