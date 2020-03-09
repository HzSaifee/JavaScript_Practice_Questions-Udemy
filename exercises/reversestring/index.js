// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    ret = ""
    for (i=str.length-1;i>=0;--i){
        ret = ret.concat(str.charAt(i))
    }
    return ret
}

module.exports = reverse;
