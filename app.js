var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var polisRouter = require('./routes/polis');
var dokterRouter = require('./routes/dokters');
var diagnosaRouter = require('./routes/diagnosas');
var tindakanMedisRouter = require('./routes/tindakan_medis');
var transaksiPeriksaRouter = require('./routes/transaksi_periksa');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/polis', polisRouter);
app.use('/dokters', dokterRouter);
app.use('/diagnosas', diagnosaRouter);
app.use('/tindakan-medis', tindakanMedisRouter);
app.use('/transaksi-periksa', transaksiPeriksaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
