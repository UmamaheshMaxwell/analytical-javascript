/*
    Calculate the length of the associative array
*/

var counterArry = {
    A: 1,
    B: 2
}

counterArry["C"] = 3;

// Method1
Object.keys(counterArry).length;

// Method2
console.log(Object.getOwnPropertyNames(counterArry).length);