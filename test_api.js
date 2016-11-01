var request = require("request"); //For hitting the API
var assert = require("assert");
var data_handler = require('./data_handler');

/*
 * Precondition for wearablesquantity endpoint test is that POST /api/wearables and 
 * DELETE /api/wearables/:id endpoints work correctly. 
 */
describe("/api/wearablesquantity", function() {
	
	before(function(done) {
		var initQuant = 0;
		data_handler.expProducts.count("*")
			.then(function (data) { 
				console.log(data);
				initQuant = parseInt(data);
			})
			.catch(function(error) {
				console.log(error);
			});
		
		for(i=0; i < initQuant; i++) {
		  data_handler.expProducts.forge({id: i})
		    .fetch({require: true})
		    .then(function (product) {
		      product.destroy()
		    })
		}
		
		for(i=0; i < 10; i++) {
	        new data_handler.expProducts({name: "test",
	            type: "test", 
	            quantity: i,
	            active: "test"
	           }).save()	
		}
	});
	
		var test_body = '{"status":"success","data":"10","message":"Retrieved Quantity"}';
	    it("should return 400", function (done) {
	    	  request.get("http://localhost:3000/api/wearablesquantity", function (err, res, body){
	    		  assert.equal(body, test_body);
	    		  
	    	  });
		});   
});

/*describe('Testing a GET request', function() {
	it("/api/allwearables", function(done) {
		request('http://localhost:3000/api/allwearables', function(error, response, body) {
			if (error) {
				return console.log('Error', error);
			}
			if (response.statusCode !== 200) {
				return console.log('Invalid status code', response.statusCode);
			}
			console.log(body);
			done();
		});
	});
});

describe('Testing a POST request', function() {
	it("/api/wearables", function(done) {
		request.post({ 
				url: 'http://localhost:3000/api/wearables',
		        form: {name:"test", type:"test", quantity:1, active:"true"}
		        }, 
		        function(error, response, body) {
			if (error) {
				return console.log('Error', error);
			}
			if (response.statusCode !== 200) {
				console.log("T E S T " + body);
				return console.log('Invalid status code', response.statusCode);
			}
			console.log("T E S T " + body);
			done();
        });
	});
});*/
