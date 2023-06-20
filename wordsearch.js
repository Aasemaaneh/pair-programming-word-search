

const transpose = require("./matrixTranspose");
const wordSearch = (letters, word) => { 
    if (letters.length !== 0) {
      const horizontalJoin = letters.map(ls => ls.join(''));
      const verticalJoin = transpose(letters).map(ls => ls.join(''));
      for (l of horizontalJoin.concat(verticalJoin)) {
           if (l.includes(word)){
              return true;
           } 
            
      }
      
      return false; 
    } else {
      return ('The array is empty!');
    }
    
}
module.exports = wordSearch



