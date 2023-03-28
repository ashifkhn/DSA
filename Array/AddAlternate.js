const addAlternate = (arr) => {
	const newArr = []
	for (let i = 0; i < arr.length; i = i + 2) {
		let newVal = (arr[i] = arr[i] + arr[i + 1])
		newArr.push(newVal)
	}
	return newArr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(addAlternate(arr))
