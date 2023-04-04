const UniqueOne = (arr) => {
	let count = new Map()

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i]
		if (count.has(num)) {
			count.set(num, count.get(num) + 1)
		} else {
			count.set(num, 1)
		}
	}

	let set = new Set(count.values(count))
	return count.size === set.size
}

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
console.log(UniqueOne(arr))
