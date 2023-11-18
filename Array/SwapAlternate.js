// const swapAlternate = (arr) => {
// 	for (let i = 0; i < arr.length; i = i + 2) {
// 		if (i + 1 < arr.length) {
// 			let temp = arr[i]
// 			arr[i] = arr[i + 1]
// 			arr[i + 1] = temp
// 		}
// 	}
// 	return arr
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(swapAlternate(arr))


const SwapAlternate=(arr)=>{


	for (let i=0; i<arr.length; i+=2){
		if (i+1<arr.length){
			let temp=arr[i]
			arr[i]=arr[i+1];
			arr[i+1]=temp;
			
		}
	}

	return arr
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(SwapAlternate(arr))