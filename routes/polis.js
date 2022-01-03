var express = require('express');
const { route } = require('.');
var router = express.Router();
var Polis = require("../models/polis");

/* Tampil Data Poli. */
router.get('/',function(req,res,next){
	Polis.findAll().then( data=>{
		res.json({
			status:true,
			pesan:"Berhasil Tampil",
			data:data
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal tampil: " + err.message,
			data:[]
		});
	});
});


/* Tambah Data Poli. */
router.post('/', function(req, res, next) {
  Polis.create(req.body).then(data => {
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

/* Ubah Data Poli. */
router.put('/', function(req, res, next) {
  Polis.update(req.body, {
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

/* Delete Data Poli. */
router.delete('/', function(req, res, next) {
  Polis.destroy({
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

router.get('/options',function(req,res,next){
	Polis.findAll().then( async data=>{

		var options = [];
		await data.forEach( async (item)=>{
			var itemBaru = {id:item.id, value:item.id+" - "+item.nama};
			await options.push(itemBaru);
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
