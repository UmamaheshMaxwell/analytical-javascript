/*
    What will be the output of the following code?
*/

var x = { foo: 1 };

var output = (function() {
    delete x.foo;
    return x.foo;
})

console.log(output);

/*****************************  Answer  *************************** 
 The code above will output undefined as output. delete operator is 
 used to delete a property from an object. Here x is an object which 
 has foo as a property and from a self-invoking function, we are 
 deleting the foo property of object x and after deletion, we are 
 trying to reference deleted property foo which result undefined.
*/