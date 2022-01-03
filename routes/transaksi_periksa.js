const { default: axios } = require('axios');
var express = require('express');
const Diagnosa = require('../models/diagnosas');
const Dokter = require('../models/dokters');
var router = express.Router();
var Transaksi_Periksa = require("../models/transaksi_periksa");

/* Tampil Data Transaksi Periksa. */
router.get('/', function(req, res, next) {
  Transaksi_Periksa.findAll({raw:true}).then( async data => {
    
    await Promise.all(data.map( async (item) => {
      // baca pasien
      var pasien = null;
      await axios.get('http://localhost:3000/pasiens/tampil/'+item.no_rm).then(function (response) {
        pasien = response.data;
      }).catch(err => {
        res.json({
          status: false,
          pesan: "Gagal Tampil: " + err.message,
          data: []
        });
      })

      // baca dokter 
      const dokter = await Dokter.findByPk(item.id_dokter);

      // baca diagnosa
      const diagnosa = await Diagnosa.findByPk(item.id_diagnosa);

      //update itemTampil
      item['nama_pasien'] = pasien.data.nama;
      item['nama_dokter'] = dokter.nama;
      item['nama_diagnosa'] = diagnosa.nama;
    }));
    
    res.json({
      status: true,
      pesan: "Berhasil Tampil",
      data:data
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
  Transaksi_Periksa.create(req.body).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tambah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tambah: " + salahnya.message,
      data:[]
    });
  });
});

/* Ubah Data Transaksi Periksa. */
router.put('/', function(req, res, next) {
  Transaksi_Periksa.update(req.body, {
    where : {id:req.body.id}
  }).then( () => {
    res.json({
      status: true,
      pesan: "Berhasil Ubah",
      data:[]
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Ubah: " + salahnya.message,
      data:[]
    });
  });
});

/* Delete Data Transaksi Periksa. */
router.delete('/', function(req, res, next) {
  Transaksi_Periksa.destroy({
    where : {id:req.body.id}
  }).then( () => {
    res.json({
      status: true,
      pesan: "Berhasil Hapus",
      data:[]
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Hapus: " + salahnya.message,
      data:[]
    });
  });
});

router.get('/pasiens', function(req, res, next){
  axios.get('http://localhost:3000/pasiens/options').then(function (response) {
    res.json(response.data);
  }).catch( err=> {
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + err.message,
      data: []
    });
  });
});

module.exports = router;
