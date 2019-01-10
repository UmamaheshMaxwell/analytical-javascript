/*
    Write a function called deepClone which takes an object 
    and creates a object copy of it.
*/

const obj = {
    name: 'Umesh',
    age: 36,
    address: {
        city: 'Bangalore',
        state: 'karnataka',
        country: 'India'
    }
}

const newObj = deepClone(obj)

function deepClone(obj) {
    let newObj = {};

    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepClone(obj[key])
        } else {
            newObj[key] = obj[key]

        }
    }
    return newObj;
}

console.log(newObj)
console.log(newObj === deepClone(obj))