/*
    Three Ways to Reverse a String in JavaScript
*/

/* 
    1. First Way 
*/

var message = "Hello World"

function reverseString(str) {
    var splitString = str.split("") // split the string
    var reverseArray = splitString.reverse(); // reverse the string
    var joinArray = reverseArray.join("") // join the string
    return joinArray;
}

// In a single line
function reverseString(str) {
    return str.split("").reverse().join("");
}

/* 
    2. Second Way 
*/

function reverseString(str) {
    var newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

/* 
    3. Third Way 
*/

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substring(1)) + str.charAt(0)
    }
}


var reverseMessage = reverseString(message)
console.log(reverseMessage)