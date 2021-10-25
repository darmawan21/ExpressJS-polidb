const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transaksi_Rawat_Inap = koneksi.define('Transaksi_Rawat_Inap', {
  kamar: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cek_out: {
      type: DataTypes.DATE,
      defaultValue: null,
  }
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

Transaksi_Rawat_Inap.belongsTo(Pasien, {foreignKey: 'id_pasien'});

module.exports = Transaksi_Rawat_Inap;