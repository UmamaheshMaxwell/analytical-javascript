/*
    Best way to detect undefined object property in JavaScript.
*/

var person = {
    name: "Uma",
    city: "Bangalore",
    age: 36
}

if (typeof person.long === 'undefined') {
    console.info('Something is undefined there')
}

if (typeof someProperty === 'undefined') {
    console.info('Seem like undefined')
}