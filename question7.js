/*
    What will be the output of the following code?
*/

var Employee = {
    company: 'Olive'
};

var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company)

/********************************  Answer  *******************************
 The code above will output xyz as Olive. Here emp1 object got company 
 as prototype property. delete operator doesn't delete prototype property.

emp1 object doesn't have company as its own property. you can test it 
console.log(emp1.hasOwnProperty('company')); //output : false However, 
we can delete company property directly from Employee object using 
delete Employee.company or we can also delete from emp1 object using 
__proto__ property delete emp1.__proto__.company.
*/