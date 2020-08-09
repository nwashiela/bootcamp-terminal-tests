let countRegNumber = require("../countRegNumber");
let assert = require("assert");

describe('The countRegNumber function', function(){

    it('should return 3 when coutn the param', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3)
    });
    it('should return  5 when coutn the param', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519')
        assert.equal(regCount, 5)
    });
});