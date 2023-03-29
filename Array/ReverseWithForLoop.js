const ReverseArray = (arr) => {
	let end = arr.length - 1
	for (let i = 0; i < arr.length; i++) {
		if (i < end) {
			let temp = arr[i]
			arr[i] = arr[end]
			arr[end] = temp
			end--
			console.log(i, 'i')
			console.log(end, 'end')
		}
	}
	return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(ReverseArray(arr))
