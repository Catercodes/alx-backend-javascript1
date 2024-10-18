const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(15.78, 2), 18);
        assert.equal(calculateNumber(1.2, 0), 1);
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(2, 15.78), 18);
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(15.78, 2.5), 19);
        assert.equal(calculateNumber(1.2, 0.2), 1);
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });

	it('should handle negative numbers', () => {
    	assert.strictEqual(calculateNumber(-1, -3), -4);
    	assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    	assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
	})

	 it('should handle zero', () => {
    	assert.strictEqual(calculateNumber(0, 0), 0);
    	assert.strictEqual(calculateNumber(0, 1.5), 2);
   	 assert.strictEqual(calculateNumber(1.5, 0), 2);
	 });
	
  	it('it round the first argument', () => {
    	assert.equal(calculateNumber(1.0, 0), 1);
    	assert.equal(calculateNumber(1.3, 0), 1);
    	assert.equal(calculateNumber(1.7, 0), 2);
  	});

  	it('it round the second argument', () => {
    	assert.equal(calculateNumber(0, 1.0), 1);
    	assert.equal(calculateNumber(0, 1.3), 1);
    	assert.equal(calculateNumber(0, 1.7), 2);
  	});

  	it('it should return the right number', () => {
    	assert.equal(calculateNumber(1.3, 0), 1);
    	assert.equal(calculateNumber(0, 1.2), 1);
    	assert.equal(calculateNumber(1.3, 1.3), 2);
    	assert.equal(calculateNumber(1.7, 1.2), 3);
    	assert.equal(calculateNumber(1.3, 1.8), 3);
    	assert.equal(calculateNumber(1.6, 1.8), 4);
  	});
})
