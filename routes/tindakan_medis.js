var express = require('express');
var router = express.Router();
var Tindakan_Medis = require("../models/tindakan_medis");

/* Tampil Data Tindakan Medis. */
router.get('/', function(req, res, next) {
  Tindakan_Medis.findAndCountAll().then(data => {
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

/* Tambah Data Tindakan Medis. */
router.post('/', function(req, res, next) {
  Tindakan_Medis.create(req.body).then(data => {
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

/* Ubah Data Tindakan Medis. */
router.put('/', function(req, res, next) {
  Tindakan_Medis.update(req.body, {
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

/* Delete Data Tindakan Medis. */
router.delete('/', function(req, res, next) {
  Tindakan_Medis.destroy({
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