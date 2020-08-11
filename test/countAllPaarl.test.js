let countAllPaarl = require("../countAllPaarl");
let assert = require("assert");

describe('The countAllPaarl function', function(){

    it('should return 2', function(){
        assert.equal(2,countAllPaarl('CY 7987, CJ 7866, CJ 87834'));
    });
    it('should return 0', function(){
        assert.equal(0,countAllPaarl('CY 79245, CV 6852, DF 875934, BH 7375'));
    });
});
