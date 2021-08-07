var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

//Offering
var addOfferingRouter = require('./routes/Offering/addOffering');
var addOfferTypeRouter = require('./routes/Offering/addOfferType');
var getOfferingListRouter = require('./routes/Offering/getOfferingList');
var getOfferTypesRouter = require('./routes/Offering/getOfferTypes');
var deleteOfferingRouter = require('./routes/Offering/deleteOffering');

//Member
var addMemberRouter = require('./routes/Member/addMember');
var getMemberListRouter = require('./routes/Member/getMemberList');

//User
var signupRouter = require('./routes/User/signup');
var signinRouter = require('./routes/User/signin');

//Expense
var getExpenRouter = require('./routes/Expense/getExpen');
var insertExpenRouter = require('./routes/Expense/insertExpen');
var insertLeafRouter = require('./routes/Expense/insertLeaf');
var insertRootRouter = require('./routes/Expense/insertRoot');

//Closing
var getOfferListRouter = require('./routes/Closing/getOfferList');
var getExpenListRouter = require('./routes/Closing/getExpenList');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//Offering
app.use('/api/addOffering', addOfferingRouter);
app.use('/api/addOfferType', addOfferTypeRouter);
app.use('/api/getOfferingList', getOfferingListRouter);
app.use('/api/getOfferTypes', getOfferTypesRouter);
app.use('/api/deleteOffering', deleteOfferingRouter);

//Member
app.use('/api/addMember', addMemberRouter);
app.use('/api/getMemberList', getMemberListRouter);

//Expen
app.use('/api/getExpenList', getExpenRouter);
app.use('/api/insertLeaf', insertLeafRouter);
app.use('/api/insertRoot', insertRootRouter);
app.use('/api/insertExpen', insertExpenRouter);

//User
app.use('/api/signup', signupRouter);
app.use('/api/signin', signinRouter);

//Closing
app.use('/api/getOfferList', getOfferListRouter);
app.use('/api/getExpen', getExpenListRouter);

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
