/*
    How to check whether a key exist in a JavaScript object or not.
*/

var student = {
    name: 'Abdul kalam',
    age: 100
}

console.info('name in student     : ', 'name' in student)
console.info('salary in student   : ', 'salary' in student)
console.log('toString in student :', 'toString' in student)

console.log('name in student     : ', student.hasOwnProperty('age'))
console.log('salary in student   : ', student.hasOwnProperty('salary'))
console.log('toString in student : ', student.hasOwnProperty('toString'))