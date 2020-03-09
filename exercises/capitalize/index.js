// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    strn = str[0].toUpperCase();
    for (i = 1; i < str.length; ++i){
        strn += str[i];
        if(str[i] == ' '){
            i++;
            strn += str[i].toUpperCase();
        }
    }
    return strn;

}


module.exports = capitalize;

// function capitalize(str) {
//     arr = str.split(' ');
//     for (i = 0; i < arr.length; ++i){
//     	arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase());
//     }
//     return arr.	join(' ');
// }