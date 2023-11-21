const array=[1,2,3,4,5,6,7,8,9,10,11,12,13]

const RotateArray1=(arr:number[])=>{

    let temp=arr[0]
    for (let i=1; i<arr.length; i++){

        arr[i-1]=arr[i]

    }
    arr[arr.length-1]=temp

    return arr
}


console.log(RotateArray1(array))