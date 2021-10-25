var express = require('express');
var router = express.Router();
var Transaksi_Rawat_Inap = require("../models/transaksi_rawat_inap");

/* Tampil Data Transaksi Periksa. */
router.get('/', function(req, res, next) {
  Transaksi_Rawat_Inap.findAndCountAll().then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tampil",
      data:data.rows,
      count: data.count
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + salahnya.message,
      data:[]
    });
  });
});

/* Tambah Data Transaksi Periksa. */
router.post('/', function(req, res, next) {
  Transaksi_Rawat_Inap.create(req.body).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tambah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tambah: " + salahnya.message,
      data:req.body
    });
  });
});

/* Ubah Data Transaksi Periksa. */
router.put('/', function(req, res, next) {
  Transaksi_Rawat_Inap.update(req.body, {
    where : {id:req.body.id}
  }).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Ubah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Ubah: " + salahnya.message,
      data:req.body
    });
  });
});

/* Delete Data Transaksi Periksa. */
router.delete('/', function(req, res, next) {
  Transaksi_Rawat_Inap.destroy({
    where : {id:req.body.id}
  }).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Hapus",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Hapus: " + salahnya.message,
      data:req.body
    });
  });
});

module.exports = router;
