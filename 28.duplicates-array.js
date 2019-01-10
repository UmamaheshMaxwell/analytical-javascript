/*
    Find duplicates in an array
*/

var array = [9, 3, 4, 5, 2, 3, 7, 3, 8, 3, 2]
    //var array = ["uma", "mahesh", "meka", "uma"]

function findDuplicates(array) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array.indexOf(array[i], i + 1) > -1) {
            if (tempArray.indexOf(array[i]) === -1) {
                tempArray.push(array[i])
            }
        }
    }
    return tempArray;
}

function uniqueDuplicateVal(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) > -1) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

console.log(findDuplicates(array))

//console.info(findDuplicates(array))

var uniqueArray = Array.from(new Set(array))
console.log(uniqueArray)