export default function mergeAndSortNumberArrays(array1,array2){
    if(!Array.isArray(array1) || !Array.isArray(array2)){
      throw new Error("Arguments must be both array");
    }
    for(let element of array1){
      if(typeof element !== 'number'){
        throw new Error("First argument must be an array of numbers");
      }
    }
    for(let element of array2){
      if(typeof element !== 'number'){
        throw new Error("Second argument must be an array of numbers");
      }
    }
    let resultArray = array1.concat(array2);
    resultArray .sort();
    return resultArray ;
  }