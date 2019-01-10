/*
    Sort an array
*/

var array = [9, 3, 4, 5, 2, 3, 7, 3, 8, 3]


Array.prototype.SortInDesc = function() {
    var array = this,
        temp;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.info(Array.from(new Set(array.SortInDesc())))

Array.prototype.SortInAsce = function() {
    var array = this,
        temp

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[i]
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}

console.log(Array.from(new Set(array.SortInAsce())))