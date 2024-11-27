function sortNumberArray(array){
    if(!Array.isArray(array)){
      throw new Error("Argument must be an array");
    }
    for(let element of array){
      if(typeof element !== 'number'){
        throw new Error("Argument must be an array of numbers");
      }
    }
    array.sort();
    return array;
  }

  module.exports = {sortNumberArray}
