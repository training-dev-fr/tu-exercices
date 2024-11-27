function palindrome(word){
    let reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
  }

  module.exports = {palindrome}