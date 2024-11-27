function countVowels(word){
    if(typeof word !== 'string'){
      throw new Error("Argument must be a string");
    }
    let count = 0;
    for(let char of word.split("")){
      if(["a","e","i","o","u","y"].includes(char)){
        count += 1;
      }
    }
    return count;
  }

  module.exports = {countVowels}