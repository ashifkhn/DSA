var IsSorted = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
        }
        else {
            return -1;
        }
    }
    return 1;
};
var array = [1, 2, 0, 4, 5, 6, 7];
console.log(IsSorted(array));
