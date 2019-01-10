/*
    Best way to detect reference values of any type in JavaScript.

    In Javascript Object are called as reference type, Any value other 
    then primitive is definitely a reference type. There are several 
    built-in reference type such as Object, Array, Function, Date, null and Error.
*/

// Detecting object using typeof operator

console.info(typeof {})
console.info(typeof [])
console.info(typeof new Array())
console.info(typeof null)
console.info(typeof new RegExp())
console.info(typeof new Date())

// But the downside of using typeof operator to detect an object is 
// that typeof returns object for null (However this is fact that 
// null is an object in JavaScript)

// The best way to detect an object of specific reference type 
// using instanceof operator.

console.info({}
    instanceof Object)
console.info([] instanceof Array)
console.info(new Array() instanceof Array)
console.info(null instanceof Object)

const sample = function() {
    console.log('I am callback function')
}

function test(callback) {
    if (callback instanceof Function) {
        callback();
    } else if (typeof callback === 'number') {
        console.info('This is integer')
    } else if (typeof callback === "string") {
        console.info('This is string')
    } else if (typeof callback === 'boolean') {
        console.info('This is boolean')
    } else if (Array.isArray(callback)) {
        console.info('This is array')
    }
}

test([])