const array = [12, 1, 2, 3, 2, 3, 4, 5, 5, 4, 12]
const array2 = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd']

let arr = [2, 3, 4, 4, 2, 1, 4]
const frequency = (arr) => {
	let count = {}
	for (let i = 0; i < arr.length; i++) {
		if ((count[arr[i]] = count[arr[i]])) {
			count[arr[i]] = count[arr[i]] + 1
		} else {
			count[arr[i]] = 1
		}
	}
	return count
}
console.log(frequency(array2))
