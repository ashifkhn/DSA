// const arr = [1, 9, 4, 2, 5, 0, 7]
// const Search = (arr, item) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === item) {
// 			return true
// 		}
// 	}
// 	return false
// }

// console.log(Search(arr, 7))



const reverseArray = (arr, search) => {
    let found=false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            found = true
            
        }
    }
    return found
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(reverseArray(arr, 8))

