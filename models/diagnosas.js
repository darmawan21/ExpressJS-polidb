const Sequelize= require('sequelize');
var koneksi = require("../koneksi.js");

const Diagnosa = koneksi.define('Diagnosa', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
    timestamps: true,  
    freezeTableName: true
});

module.exports = Diagnosa;