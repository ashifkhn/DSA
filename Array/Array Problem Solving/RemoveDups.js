var RemoveDups = function (arr) {
    var i = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }
    }
    return i + 1;
};
var array = [1, 2, 2, 3, 4, 4, 5,];
console.log(RemoveDups(array));
