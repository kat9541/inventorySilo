var request = require("request");
var assert = require("assert");

request("http://localhost:3000/api/wearablesquantity", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})

describe("mytest", function() {
	var test_body = '{"status":"success","data":"1","message":"Retrieved Quantity"}';
    it("should return 400", function (done) {
    	  request.get("http://localhost:3000/api/wearablesquantity", function (err, res, body){
    		  assert.equal(test_body, body);
    		  done();
    	  });
	});   
});