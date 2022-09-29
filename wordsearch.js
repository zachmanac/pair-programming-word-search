const wordSearch = (letters, word) => { 
    
 if (letters.length === 0) {
     return undefined;
   }
      
   const horizontalJoin = letters.map(ls => ls.join(''));
   for (let l of horizontalJoin) {
     if (l.includes(word) || l.includes(word.split("").reverse().join(""))) return true;
   }
    
   const verticalJoin = (transpose(letters)).map(ls => ls.join(''));
    for (let l of verticalJoin) {
     if (l.includes(word) || l.includes(word.split("").reverse().join(""))) return true;
   }
      
    return false;
  };
   
  const transpose = function(matrix) {
    // make new array
   let newArr = [];
  
    // [[1], [2], [3], [4]]
   for (let element of matrix[0]) {
    newArr.push([element]);
   }
    
    // push elements of matching indices into new array, looping through remaining arrays from matrix (matrix[>0])
   for (let i = 0; i < newArr.length; i++) {
      for (let j = 1; j < matrix.length; j++) {
       newArr[i].push(matrix[j][i]);
      }
    }
   
 return newArr;
};

module.exports = wordSearch