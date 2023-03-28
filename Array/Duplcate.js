const arr = [1, 2, 3, 4, 2, 5]

const findDuplicate = (arr) => {
	let ans = 0
	for (let i = 0; i < arr.length; i++) {
		ans = ans ^ arr[i]
	}
	for (let i = 1; i < arr.length; i++) {
		ans = ans ^ i
	}
	return ans
}

const a = findDuplicate(arr)
console.log(a)
