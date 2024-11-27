export default function palindrome(word){
    let reverseWord = word.split("").reverse().join("");
    return word === reverseWord;
  }