const { Sequelize, DataTypes } = require('sequelize');
var koneksi = require("../koneksi.js");

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
}), Poli = koneksi.define('poli', {
    nama: {
        type: DataTypes.STRING,
        allowNull: false
      },
});

Dokter.belongsTo(Poli, {foreignKey: 'id_poli'});

module.exports = Dokter;