/*
    What will be the output of the following code?
*/

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);

/***************************  Answer  *************************
 The code above will output 5 as output. When we used delete 
 operator for deleting an array element then, the array length 
 is not affected by this. This holds even if you deleted all 
 elements of an array using delete operator.
*/