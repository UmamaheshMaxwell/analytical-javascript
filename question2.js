/*
    What is the drawback of having  method inside a JavaScript object?
*/

function Employee(name, company, salary) {
    this.name = name || "";
    this.company = company || "";
    this.salary = salary || 5000;

    this.increaseSalary = function() {
        this.salary = this.salary + 1000;
    }
}

const emp1 = new Employee('Uma', 'Lilly', 3000);
console.log(emp1);
const emp2 = new Employee('Swathi', 'EF', 1500);
console.log(emp2);
const emp3 = new Employee('Indu', 'Valuelabs', 1500);
console.log(emp3);

/**************************  Answer  ************************ 
Here each instance variable emp1, emp2, emp3 has own copy of
increaseSalary private method
*/

/****************************  Note  ************************ 
Accessing method via prototype will keep a single copy of it. 
    Employee.prototype.increaseSalary = function() {
        this.salary = this.salary + 1000;
    }
*/