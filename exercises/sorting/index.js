// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i =  0; i < arr.length; ++i)

        for(let j = i+1; j < arr.length; ++j)

            if(arr[i] > arr[j]){
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
    
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; ++i){

        let minIndex = i;

        for(let j = i+1; j < arr.length; ++j)

            if(arr[minIndex] > arr[j])
                minIndex = j;

        if(i !== minIndex){
            arr[i] = arr[i] + arr[minIndex];
            arr[minIndex] = arr[i] - arr[minIndex];
            arr[i] = arr[i] - arr[minIndex];
        }
    }

    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1)
        return arr;
    
    let center = parseInt(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let arr = [];

    while(left.length && right.length){
        if(left[0] > right[0])
            arr.push(right.shift());
        else
            arr.push(left.shift());
    }

    if(left.length)
        arr.push(...left);
    else
        arr.push(...right);
    
    return arr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
