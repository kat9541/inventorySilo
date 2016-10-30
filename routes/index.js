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

// might need more than just these???

// how to add new part
//router.post('/api/parts/newrequest', db.);

// how to remove part when no longer needed in production by manufacturing
// router.post('/api/parts/:id', db.);

// router.

module.exports = router;
