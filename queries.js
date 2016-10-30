var promise = require('bluebird');
//require('dotenv').config();

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://admin:a@localhost:5432/inventory';
//var connectionString = 'postgres://dcr@localhost:5432/inventory';
var db = pgp(connectionString);

// add query functions
function getWearableQuantity(req,res,next){
    db.any('select count(*) from products')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved wearables quantity'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getWearable(req, res, next) {
  var wearID = parseInt(req.params.id);
  db.one('select * from products where id = $1', wearID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE Wearable'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getAllWearables(req, res, next) {

  db.any('select * from products')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all Wearable'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



function sendWearable(req, res, next) {
  db.none('insert into products(name, typeProd, status)' +
      'values(${name}, ${typeProd}, ${status})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one wearable'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeWearable(req, res, next) {
  var prodID = parseInt(req.params.id);
  db.result('delete from products where id = $1', prodID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} wearable`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}


function getAllParts(req, res, next) {

  db.any('select * from parts')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all Parts'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPartsExpenses(req, res, next) {

  db.any('select sum(cost) from parts')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all Parts'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPart(req, res, next) {
  var wearID = parseInt(req.params.id);
  db.one('select * from parts where id = $1', wearID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE Part'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


module.exports = {
    getWearableQuantity: getWearableQuantity,
    getWearable: getWearable,
    sendWearable: sendWearable,
    removeWearable: removeWearable,
    getAllWearables: getAllWearables,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartsExpenses: getPartsExpenses
};