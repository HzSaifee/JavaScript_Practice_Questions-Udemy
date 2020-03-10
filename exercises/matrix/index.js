// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    new_array = [];
    for(i=0;i<n;++i)
        new_array[i] = [];
    row0_col1 = 0;
    right0_left1 = 0;
    down0_up1 = 0;
    for(i = 0, j = 0, count = 1; count <= n*n; count++){
        new_array[i][j] = count;
        if(row0_col1 == 0){
            if(right0_left1 == 0)
                ++j;
            else
                --j;
            if(j == n-1-i){
                row0_col1 = 1;
                if(right0_left1 == 0)
                    down0_up1 = 0;
                else
                    down0_up1 = 1;
            }
        }
        else{
            if(down0_up1 == 0){
                ++i;
                if(i == j){
                    row0_col1 = 0;
                    right0_left1 = 1;
                }
            }
            else{
                --i;
                if(i == j+1){
                    row0_col1 = 0;
                    right0_left1 = 0;
                }
            }
        }
    }
    return new_array;
}

module.exports = matrix;
