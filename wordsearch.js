const transpose = function (matrix) {
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!Array.isArray(newArray[j])) {
        newArray[j] = [];
      }
      newArray[j][i] = matrix[i][j];
    }
  }
  return newArray;
};

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose(letters);
  let joinedVertical = verticalJoin.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word) || l.includes(word.split("").reverse().join(""))) return true;
  }
  for (v of joinedVertical) {
      if (v.includes(word) || v.includes(word.split("").reverse().join(""))) return true;
  }
 
  return false
};

module.exports = wordSearch