function max(a,b){
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    if(a > b){
      return a;
    }else if(b > a){
      return b;
    }else if(a === b){
      return a;
    }
}

module.exports = {max}