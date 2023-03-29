// const frequency = (arr, key) => {
// 	let count = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == key) {
// 			count++
// 		}
// 	}
// 	return count
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 2, 3]

// console.log(frequency(arr, 2))

// const frequencies = (arr) => {
// 	let count = {}

// 	for (let i = 0; i < arr.length; i++) {
// 		if (count[arr[i]] === count[arr[i]]) {
// 			count[arr[i]] = count[arr[i]] + 1
// 		} else {
// 			count[arr[i]] = 1
// 		}
// 	}
// 	return count
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 2, 3]

// console.log(frequencies(arr))

const frequencies = (arr) => {
	let count = {}

	for (let i = 0; i < arr.length; i++) {
		if (count[arr[i]] === count[arr[i]]) {
			count[arr[i]] = count[arr[i]] + 1
		} else {
			count[arr[i]] = 1
		}
	}
	return count
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 2, 3]

console.log(frequencies(arr))
