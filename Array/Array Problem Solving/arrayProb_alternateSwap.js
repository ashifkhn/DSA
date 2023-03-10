// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// for (let i = 0; i < arr.length; i += 2) {
// 	if (arr[i + 1] < arr.length) {
// 		let temp = arr[i]
// 		arr[i] = arr[i + 1]
// 		arr[i + 1] = temp
// 	}
// }

// console.log(arr)

const arr = [1, 3, 1, 3, 2]
var ans = 0

const findDup = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		ans = ans ^ arr[i]
	}
	return ans
}

console.log(findDup(arr))
