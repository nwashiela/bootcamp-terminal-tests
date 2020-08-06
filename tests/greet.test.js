let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Akhona correctly', function(){
        assert.equal('Hello, Akhona', greet('Akhona'));
    });
    it('should greet Lindelwa correctly', function(){
        assert.equal('Hello, Lindelwa', greet('Lindelwa'));
    });
    it('should greet mom correctly', function(){
        assert.equal('Hello, Mommy', greet('Mommy'));
    });
});
