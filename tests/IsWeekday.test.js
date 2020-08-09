let IsWeekday = require("../IsWeekday");
let assert = require("assert");

describe('The IsWeekday function', function(){

    it('should return false if not Weekday', function(){
        assert.equal(false,IsWeekday('Sunday'));
    });
    it('should return true if it is a weekday', function(){
        assert.equal(true, IsWeekday('Monday'));
    });
    it('should return true if it is a weekday', function(){
        assert.equal(true, IsWeekday('Friday'));
    });
});
