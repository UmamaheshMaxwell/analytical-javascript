/*
    What will be the output of the following code?
*/

var bar = true;
console.log(bar + 0);
console.log(bar + "xyz");
console.log(bar + true);
console.log(bar + false);

/***************************  Answer  *************************
The code above will output 1, "truexyz", 2, 1 as output. 
Here's a general guideline for the plus operator:

    Number  + Number   -> Addition
    Boolean + Number   -> Addition
    Number  + String   -> Concatenation
    String  + Boolean  -> Concatenation
    String  + String   -> Concatenation
    Boolean + Boolean  -> Addition
*/