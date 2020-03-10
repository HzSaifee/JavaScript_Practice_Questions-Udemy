// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, a = 0, b = 1) {
    if (n == 0)
        return a;
    if(n == 1)
        return b;
    b = a + b;
    a = b - a;
    b = fib(n-1,a,b)
    return b;
}

module.exports = fib;

// function fib(n) {
//     a = 0;
//     b = 1;
//     for (i = 2; i <= n; ++i){
//         b = a + b;
//         a = b - a;
//     }
//     return b;
// }