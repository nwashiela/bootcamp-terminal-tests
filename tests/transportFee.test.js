let transportFee = require("../transportFee");
let assert = require("assert");

describe('The transportFee function', function(){

    it("should return 20.00 for morning", function() {
    
        assert.deepEqual("R20", transportFee('morning'));
    });
    it("should return 10.00 for afternoon", function() {
    
        assert.deepEqual("R10", transportFee('afternoon'));
    });
    
  });
