const arr = [5, 10, 11, 54, 20, 2]
const findMinMax = (arr) => {
	let max = arr[0]
	let min = arr[0]

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i]
		}

		if (arr[i] < min) {
			min = arr[i]
		}
	}
	return { max, min }
}
console.log(findMinMax(arr))
