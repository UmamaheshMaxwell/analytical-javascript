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

/*
Second Method: without using reverse function
*/

var str = "this is swathi"
var array = str.split(" ")
array.forEach(function(value,count){
    var index=0,temp;
    var charArray = value.split('')
    var len = charArray.length
    while(index < len)
    {
        temp = charArray[len-1];
        charArray[len-1]=charArray[index];
        charArray[index] = temp;
        index++;
        len--;
    }
    array[count] = charArray.join("") + ' '
})
console.log(array.join(""));
//Output: siht si ihtaws

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
