/*
    What will be the output of the following code?
*/

// NFE (Named Function Expression)
var foo = function bar() { return 12; };
typeof bar();

/***************************  Answer  *************************
The output will be Reference Error. 
To fix the bug we can try to rewrite the code a little bit
*/

// fix1
var bar = function() { return 12; };
typeof bar();

// fix2
function bar() { return 12; };
typeof bar();

/*
The function definition can have only one reference variable 
as a function name, In sample 1 bar is reference variable 
which is pointing to anonymous function and in sample 2 
we have function statement and bar is the function name.
*/

var foo = function bar() {
    // foo is visible here
    // bar is visible here
    console.log(typeof bar()); // Works here :)
};
// foo is visible here
// bar is undefined here