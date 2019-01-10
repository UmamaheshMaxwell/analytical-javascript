/*
    How to empty an array in JavaScript?
*/

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// Method1
arrayList = [];
console.log(arrayList);

// Method2
arrayList.length = 0;
console.log(arrayList);

// Method3
arrayList.splice(0, arrayList.length);
console.log(arrayList);


// Method4
while (arrayList.length) {
    arrayList.pop();
}
console.log(arrayList);