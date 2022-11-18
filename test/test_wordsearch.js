const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontal", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present vertical", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'I', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'D', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present, vertical and backwords", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'S', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'S', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'I', 'O', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'M', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'D', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MOSS');

    assert.isTrue(result);
  });

  it("should return true if the word is present, horizontal and backwords", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'S', 'S', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'E', 'S', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'I', 'T', 'U', 'A', 'L'],
      ['H', 'S', 'S', 'O', 'M', '0', 'S', 'D'],
      ['W', 'H', 'C', 'F', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'L', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'D', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MOSS');

    assert.isTrue(result);
  });

});
