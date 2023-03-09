const arr = [9, 2, 1, 5, -1, 4, 0]
const findMin = (arr) => {
	var min = arr[0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
	}
	return min
}

console.log(findMin(arr))
