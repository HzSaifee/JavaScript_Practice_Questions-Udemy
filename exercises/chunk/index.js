// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    newArray = [];
    newIndex = -1;
    for(i = 0; i < array.length; ++i){
        if(i % size == 0)
            newIndex++;
        newArray[newIndex][i % size] = array[i];
    }
    return newArray;
}

module.exports = chunk;

// function chunk(array, size) {
//     newArray = [];
//     for(i = 0; i < array.length; i=i+size){
//         newArray[i] = array.slice(i,i+size);
//     }
//     return newArray;
// }