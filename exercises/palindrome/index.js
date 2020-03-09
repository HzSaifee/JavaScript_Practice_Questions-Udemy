// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    t = 1;
    for (i=0; i < str.length/2; ++i){
        if(str.charAt(i) != str.charAt(str.length - i - 1)){
            t= 0;
            break;
        }
    }
    if(t)   return true;
    else    return false;
}
module.exports = palindrome;

// function palindrome(str) {
//     return (str === str.split('').reverse().join(''));
// }
