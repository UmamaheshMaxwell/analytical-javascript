/*
    Describe Object-Based inheritance in JavaScript.
*/

function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

function SoftwareEngineer(age) {
    this.age = age;
}

SoftwareEngineer.prototype = new Employee('Umamahesh', "Meka");

SoftwareEngineer.prototype.getAge = function() {
    return this.age;
}

function HardwareEngineer() {}

HardwareEngineer.prototype = new Employee('Mahesh', 'Meka');

const sw = new SoftwareEngineer(36);
const hw = new HardwareEngineer();

console.info(hw.fullName())
console.info(sw.fullName())
console.info(sw.getAge())