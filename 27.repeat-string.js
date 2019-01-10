/*
    Repeat a String in JavaScript
*/

console.info("%cRepeatString as a function",
    "color:white;background-color:teal; font-size:large")

function repeatString(str, times) {
    var newStr = "";
    for (var i = 0; i < times; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(repeatString("ABC", 3))
console.log(repeatString("***", 5))
console.log(repeatString("123", 3))

console.info("%cRepeatString as string method",
    "color:white;background-color:teal; font-size:large")

String.prototype.RepeatString = function(times) {
    var newStr = "";
    var self = this;
    if (times === 0) {
        newStr += self;
    }
    for (var i = 0; i < times; i++) {
        newStr += self;
    }
    return newStr;
}
console.info("ABC".RepeatString(4))
console.info("***".RepeatString(3))
console.info("12".RepeatString(2))
console.info("@@".RepeatString(1))
console.info("#".RepeatString(-1))

function repeatStringNumTimes(string, times) {
    if (times < 0)
        return "";
    if (times === 1)
        return string;
    else
        return string + repeatStringNumTimes(string, times - 1);
}
console.info(repeatStringNumTimes("abc", 1))