const assert = require('chai').assert;
const sortNumbers = require('../bubble-sort');

describe('sort numbers', function() {
    it('it sorts an array of numbers', function(){
        assert.deepEqual(sortNumbers([3,8,2,34,12,56]), [2,3,8,12,34,56]);
    });
});
