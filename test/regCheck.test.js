let regCheck = require("../regCheck");
let assert = require("assert");

describe('The regCheck function', function(){

    it("should return true for (GP)", function() {
        assert.equal(true, regCheck('GP 345-56', 'GP'));
        
      });
  
      it("should return false for ND", function() {
           var DURBAN_REG_NUMBER = 'ND 123-124';

          assert.equal(false, regCheck('ND 123-124', 'ND'));
      });
    
  });
  