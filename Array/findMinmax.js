const arr = [12, 11, 3, 4, 7, 1, 9]
let min = 9999999
let max = -9999999
let difference;

const findMinMax = (arr) => {

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) { 
            min = arr[i]
        }

    }
    difference=max-min
    return {max,min,difference}
    
}


const a = findMinMax(arr)

console.log(a)
