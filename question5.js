/*
    What will be the output of the following code?
*/
var x = 1;
var output = (function() {
    delete x;
    return x;
})();

console.log(output);

/*****************************  Answer  *************************** 
 The code above will output 1 as output. delete operator is used to
 delete a property from an object. Here x is not an object it's 
 global variable of type number.
*/