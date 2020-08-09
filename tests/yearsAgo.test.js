let yearsAgo = require("../yearsAgo");
let assert = require("assert");

describe('The yearsAgo function', function(){

    it('should return 10 if enter 2010', function(){
        assert.equal(10,yearsAgo(2010));
    });
    it('should return 4 if enter 2016', function(){
        assert.equal(4,yearsAgo(2016));
    });
    it('should return 25 if enter 1995', function(){
        assert.equal(25,yearsAgo(1995));
    });
});
