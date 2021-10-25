var express = require('express');
var router = express.Router();
var Transaksi_Periksa_Detail = require("../models/transaksi_periksa_detail");

/* Tampil Data Transaksi Periksa Detail. */
router.get('/', function(req, res, next) {
  Transaksi_Periksa_Detail.findAndCountAll().then(data => {
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

/* Tambah Data Transaksi Periksa Detail. */
router.post('/', function(req, res, next) {
  Transaksi_Periksa_Detail.create(req.body).then(data => {
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

/* Ubah Data Transaksi Periksa Detail. */
router.put('/', function(req, res, next) {
  Transaksi_Periksa_Detail.update(req.body, {
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

/* Delete Data Transaksi Periksa Detail. */
router.delete('/', function(req, res, next) {
  Transaksi_Periksa_Detail.destroy({
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
