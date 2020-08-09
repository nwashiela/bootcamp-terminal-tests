let isFromBellville = require("../isFromBellville");
let assert = require("assert");

describe('The isFromBellville function', function(){

    it('should return true if it start with CY', function(){
        assert.equal(true,isFromBellville('CY'));
    });
    it('should return False if does not start with CY', function(){
        assert.equal(false, isFromBellville('CA'));
    });
    it('should return False if does not start with CY', function(){
        assert.equal(false, isFromBellville('GP'));
    });
});
