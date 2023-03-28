const UniqueOne = (arr) => {

    let sum=0
    for (let i = 0; i < arr.length; i++) {
        sum=sum^arr[i]
    }
    return sum

    
}

const arr = [1, 1, 2, 3, 3, 4, 4, 5, 5,]

console.log(UniqueOne(arr))