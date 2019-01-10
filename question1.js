/*
Write a multiply function which will work properly when invoked with following syntax.

    console.log(multiply(2)(3)(4)); // output : 24
    console.log(multiply(4)(3)(4)); // output : 48
*/

function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}

console.info(multiply(2)(3)(4));