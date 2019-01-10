/*
    What will be the output of the following code?
*/

var salary = "1000$";

(function() {
    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);
})();

/*****************************  Answer  ***************************
 The code above will output: undefined, 5000$ because of hoisting. 
 In the code presented above, you might be expecting salary to 
 retain it values from outer scope until the point that salary 
 was re-declared in the inner scope. But due to hoisting salary 
 value was undefined instead. To understand it better have a look 
 of the following code, here salary variable is hoisted and declared 
 at the top in function scope. When we print its value using console.
 log the result is undefined. Afterwards the variable is redeclared 
 and the new value "5000$" is assigned to it.

    var salary = "1000$";

    (function () {
    var salary = undefined;
    console.log("Original salary was " + salary);

    salary = "5000$";

    console.log("My New Salary " + salary);
    })();
*/