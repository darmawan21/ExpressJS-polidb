const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

const Transaksi_Periksa_Detail = koneksi.define('Transaksi_Periksa_Detail', {
  biaya: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
    freezeTableName: true
}), Transaksi_Periksa = koneksi.define('transaksi_periksa', {
    biaya: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}), Tindakan = koneksi.define('tindakan', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
    biaya: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Transaksi_Periksa_Detail.belongsTo(Transaksi_Periksa, {foreignKey: 'id_transaksi_periksa'});
Transaksi_Periksa_Detail.belongsTo(Tindakan, {foreignKey: 'id_tindakan'});


module.exports = Transaksi_Periksa_Detail;