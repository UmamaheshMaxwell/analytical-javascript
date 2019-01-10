/*
    Reverse a word of the string in JavaScript
*/

var message = " How are you"

console.info(
    message
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .reverse()
    .join(""))


// function ReverseWord(str) {
//     var newStr = "";
//     var newArray = str.split('');
//     for (var i = 0; i < newArray.length; i++) {
//         for (var j = newArray[i].length - 1; j <= 0; j--) {
//             newStr += newArray[i][j]
//         }
//         newStr += " "
//     }
// }

// console.log(ReverseWord(message))