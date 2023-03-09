const arr = [5, 10, 11, 54, 20]
const findMax = (arr) => {
	var max = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	return max
}
console.log(findMax(arr))
