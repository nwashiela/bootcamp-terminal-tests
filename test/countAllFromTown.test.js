let countAllFromTown = require("../countAllFromTown");
let assert = require("assert");

describe('The countAllFromTown function', function () {

    it('should return 3', function () {

        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');

        assert.equal(fromStellies, 3)
    });
    it('should return 5', function () {

        var fromCapeTown = countAllFromTown('CA 124,CA 567,CA 345, CJ 456,CL 341,CA 345, CJ 456,CA 341', 'CA');

        assert.equal(fromCapeTown, 5)
    });
    
});
