let assert = require("assert");
let findItemsOver = require("../findItemsOver");



describe('The findItemsOver function', function(){
    var item = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    var threshold = 25;
    it('should return items over ', function(){
  
     assert.deepEqual([
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ], findItemsOver(item, 25))
    });
});
