// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const arr = str.split('').sort();
    max = 0;
    max_count = [1];
    max_char = arr[0];
    for(i = 1, j = 0; i < str.length; ++i){
        if(arr[i] === max_char[j])
           max_count[j]++;
        else{
            max_char[++j] = arr[i];
            max_count[j] = 1;
        }
    }
    for (i = 0; i < max_count.length; ++i){
        if(max_count[i] > max){
            max = max_count[i];
            j = i;
        }
    }
    return max_char[j];
}

module.exports = maxChar;
