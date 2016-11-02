var promise = require('bluebird');
//require('dotenv').config();
var data_handler = require('./data_handler');



var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
//var connectionString = 'postgres://admin:a@localhost:5432/inventory';
var connectionString = 'postgres://admin:a@localhost:5432/inventory';
var db = pgp(connectionString);


// add query functions
function getWearableQuantity(req,res,next){
    data_handler.expProducts.count('*')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved Quantity'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getWearable(req, res, next) {
  var wearID = parseInt(req.params.id);
  new data_handler.expProducts
  ({'id': wearID})
  .fetch()
  .then(function(product){
  res.status(200)
        .json({
          status: 'success',
          data: product.toJSON(),
          message: 'Retrieved Wearable'
        });
  });

}

function getAllWearables(req, res, next) {

   data_handler.expProducts.fetchAll()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Retrieved all Products'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



function sendWearable(req, res, next) {
    new data_handler.expProducts({name: req.body.name,
     type: req.body.type, 
     quantity: req.body.quantity,
     active: req.body.active
    }).save()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Inserted one wearable'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeWearable(req, res, next) {
  var prodID = parseInt(req.params.id);
  data_handler.expProducts.forge({id: req.params.id})
    .fetch({require: true})
    .then(function (product) {
      product.destroy()
      .then(function () {
        res.json({error: true, data: {message: 'Product successfully deleted'}});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
}


function getAllParts(req, res, next) {

  data_handler.expParts.fetchAll()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Retrieved all Parts'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPartsExpenses(req, res, next) {

  data_handler.knexQuery('parts').sum('cost').then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Parts Expenses'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function getPart(req, res, next) {
var partID = parseInt(req.params.id);
  new data_handler.expParts
  ({'id': partID})
  .fetch()
  .then(function(part){
  res.status(200)
        .json({
          status: 'success',
          data: part.toJSON(),
          message: 'Retrieved Part'
        });
  });

}

function sendProductOrder(req, res, next){
    new data_handler.expProductsOrder({address: req.body.address,
     quantity: req.body.quantity
    }).save()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Inserted one product order'
        });
    })
    .catch(function (err) {
      return next(err);
    });

}

function sendPartOrder(req, res, next){
  new data_handler.expPartOrders({partid: req.body.partid,
     quantity: req.body.quantity,
     totalcost: req.body.totalcost
    }).save()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Inserted one part order'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getPartRequests(req, res, next){
 data_handler.expReqParts.fetchAll()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Retrieved all Part Requests'
        });
    })
    .catch(function (err) {
      return next(err);
    });



}

function sendPart(req, res, next) {
    new data_handler.expParts({partid : req.body.partid,
     type : req.body.type,
      attribute : req.body.attribute,
       description : req.body.description,
        recamt : req.body.recamt,
         price : req.body.price,
          quantity : req.body.quantity
    }).save()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Inserted one part'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function sendPartRequest(req, res, next) {
    new data_handler.expReqParts({partid : req.body.partid,
     type : req.body.type,
      attribute : req.body.attribute,
       description : req.body.description,
        recamt : req.body.recamt,
         seen : req.body.seen,
          response : req.body.response,
           datesent : req.body.datesent
    }).save()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Inserted one part request'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}



function getAllPartOrders(req, res, next) {

  data_handler.expPartOrders.fetchAll()
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data.toJSON(),
          message: 'Retrieved all part orders'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function sendRefurbishOrder(req, res, next){
   /*
    Discuss this endpoint with team.
    Customer support wants to send us an order for refurbished items
    currently we have a database that stores product order but doesn't
    have information on what type of product they are ordering only the id.
    We can use the same endpoint but just add another column which specifies
    what coniditon the product is in i.e. new, refurb, etc.




   */

}




module.exports = {
    getWearableQuantity: getWearableQuantity,
    getWearable: getWearable,
    sendWearable: sendWearable,
    removeWearable: removeWearable,
    getAllWearables: getAllWearables,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartsExpenses: getPartsExpenses,
    sendProductOrder: sendProductOrder,
    sendRefurbishOrder: sendRefurbishOrder,
    sendPartOrder: sendPartOrder,
    getPartRequests: getPartRequests,
    sendPart : sendPart,
    sendPartRequest : sendPartRequest,
    getAllPartOrders : getAllPartOrders
};