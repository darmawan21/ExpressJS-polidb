var express = require('express');
var router = express.Router();
var Tindakan_Medis = require("../models/tindakan_medis");

/* Tampil Data Tindakan Medis. */
router.get('/', function(req, res, next) {
  Tindakan_Medis.findAll().then(data => {
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
      data:[]
    });
  });
});

/* Ubah Data Tindakan Medis. */
router.put('/', function(req, res, next) {
  Tindakan_Medis.update(req.body, {
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

/* Delete Data Tindakan Medis. */
router.delete('/', function(req, res, next) {
  Tindakan_Medis.destroy({
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
	Tindakan_Medis.findAll().then( data=>{

		var options = data.map( (item)=>{
			return {
				id:item.id, 
				value:item.nama+ " - "+item.biaya,
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
