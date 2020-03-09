// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();
    charMapA = createCharMap(stringA);
    charMapB = createCharMap(stringB);
    
    if(Object.keys(charMapA).length != Object.keys(charMapB).length)
        return false;

    for (char in charMapA)
        if(charMapB[char] != charMapA[char])
            return false;

    return true;
}

function createCharMap(strng){
    charMap = {}

    for (str of strng)
        if(str.match("^[A-Za-z0-9]+$"))
            charMap[str] = charMap[str] + 1 || 1;

    return charMap;
}

module.exports = anagrams;
