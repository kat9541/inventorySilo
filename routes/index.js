var express = require('express');
var router = express.Router();
var db = require('../queries');


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inventory API' });
});

/*Proucts API*/
router.get('/api/allwearables',db.getAllWearables);
router.get('/api/wearablesquantity', db.getWearableQuantity);
router.get('/api/wearables/:id', db.getWearable);
router.post('/api/wearables', db.sendWearable);
router.delete('/api/wearables/:id', db.removeWearable);


/*Parts API*/
router.get('/api/allparts',db.getAllParts);
router.get('/api/parts/:id', db.getPart);
router.get('/api/partsexpenses', db.getPartsExpenses);
router.post('/api/parts', db.sendPart);


/*Part Requests - Manufacturing uses this to request new parts or more parts*/
router.get('/api/partrequests', db.getPartRequests);
router.post('/api/partrequests', db.sendPartRequest);




/*Product Orders API*/
/*This is used by sales to order products from us*/
router.post('/api/productorder', db.sendProductOrder);




/*Refurbished Product Orders API INACTIVE!!!!!*/
router.post('/api/productorder/refurbished', db.sendRefurbishOrder);



/*This is how we keep records of parts we ordered from vendors*/
router.post('/api/partorder', db.sendPartOrder);
router.get('/api/allpartorders', db.getAllPartOrders);




/*Stubbed APIS*/
/*
Currently have nothing to stub from Sales and Customer Support


*/



// might need more than just these???

// how to add new part
//router.post('/api/parts/newrequest', db.);

// how to remove part when no longer needed in production by manufacturing
// router.post('/api/parts/:id', db.);

// router.

module.exports = router;
