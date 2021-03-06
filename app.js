var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//add middleware to manage sessions
const roomsManager = require('./middlewares/rooms-manager');
const cookieSession = require('./middlewares/cookie-session');
const auth = require('./middlewares/auth');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var forumsRouter = require('./routes/forums/forum');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//add use of cookie sessions

app.use(roomsManager)
app.use(cookieSession)
app.use(express.static(path.join(__dirname, 'public')));


app.use(auth);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/forums', forumsRouter);

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
