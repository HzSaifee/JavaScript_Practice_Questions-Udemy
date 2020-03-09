// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    temp = 0;
    while(n != 0){
        temp = (temp * 10) + (n % 10);
        n = parseInt(n / 10);
    }
    return temp;
}

module.exports = reverseInt;

// function reverseInt(n) {
//     temp = 0;
//     neg = 0;
//     if(n < 0){
//         neg = 1;
//         n *= -1;
//     }
//     while(n != 0){
//         temp = (temp * 10) + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     if(neg) temp *= -1;
//     return temp;
// }
