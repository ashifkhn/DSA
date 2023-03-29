// let nameObj = {
// 	firstName: 'John',
// 	lastName: 'Wick',
// 	printFunctions: function (work, from) {
// 		console.log(
// 			this.firstName + ' ' + this.lastName,
// 			'is a ' + work,
// 			'from ' + from
// 		)
// 	},
// }

// let nameObj2 = {
// 	firstName: 'Tony',
// 	lastName: 'Stark',
// }

// nameObj.printFunctions.call(nameObj2, 'Developer', 'Dibrugarh, Assam')
// nameObj.printFunctions.apply(nameObj2, ['Developer', 'Dibrugarh ,Assam'])
// let howBindWorks = nameObj.printFunctions.bind(
// 	nameObj2,
// 	'Developer',
// 	'Dibrugarh ,Assam'
// )

// console.log(howBindWorks)
// howBindWorks()

const sortArr = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			let temp = arr[i]
			arr[i] = arr[i + 1]
			arr[i + 1] = temp
			i = -1
		}
	}
	return arr
}

const arr = [2, 3, 4, 1, 5]

console.log(sortArr(arr))
