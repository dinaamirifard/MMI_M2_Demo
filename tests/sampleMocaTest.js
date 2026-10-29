const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
function multiply(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

});

describe('#multiply()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    it('should multiply numbers', function () {
        expect(multiply([1, 2, 3, 4, 5])).to.equal(120);
    })
});