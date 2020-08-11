let fromWhere = require("../fromWhere");
let assert = require("assert");
const { NONAME } = require("dns");

describe('The fromWhere function', function(){

    it("should return Bellville for CY", function() {
    
        assert.deepEqual("Bellville", fromWhere('CY'));
    });
    it("should return Paarl for CJ", function() {
    
        assert.deepEqual("Paarl", fromWhere('CJ'));
    });
    it("should return Cape Town for CA", function() {
    
        assert.deepEqual("Cape Town", fromWhere('CA'));
    });
    it("should return default for Some other place", function() {
    
        assert.deepEqual("Some other place!", fromWhere(''));
    });
  });
