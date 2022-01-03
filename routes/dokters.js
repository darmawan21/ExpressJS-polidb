var express = require('express');
var router = express.Router();
var Dokters = require("../models/dokters");

/* Tampil Data Dokter. */
router.get('/', function(req, res, next) {
  Dokters.findAll().then(data => {
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

/* Tambah Data Dokter. */
router.post('/', function(req, res, next) {
  Dokters.create(req.body).then(data => {
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

/* Ubah Data Dokter. */
router.put('/', function(req, res, next) {
  Dokters.update(req.body, {
    where : {id:req.body.id}
  }).then(() => {
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

/* Delete Data Dokter. */
router.delete('/', function(req, res, next) {
  Dokters.destroy({
    where : {id:req.body.id}
  }).then(() => {
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

router.get('/options',function(req,res,next){
	Dokters.findAll().then( data=>{

		var options = data.map( (item)=>{
			return {
				id:item.id, 
				value:item.nama,
				data:item
			};
		});

		res.json({
			status:true,
			pesan:"Berhasil Tampil Options",
			data: options
		});

	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal tampil: " + err.message,
			data:[]
		});
	});
});

module.exports = router;
