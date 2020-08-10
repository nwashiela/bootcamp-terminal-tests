let totalPhoneBill = require("../totalPhoneBill");
let assert = require("assert");

describe('The totalPhoneBill function', function(){

    it("should return 2.75 for calls", function() {
    
        assert.equal('R2.75', totalPhoneBill('call'));
    });
    it("should return 2,60 for sms", function() {
    
        assert.equal('R2.60', totalPhoneBill('sms,sms,sms,sms'));
    });
  
    
  });