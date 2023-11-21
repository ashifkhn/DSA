// const RotateByDIndex=(arr,d)=>{

//     d=d%arr.length
//     let arrNew=[]
//     for (let i=0;i<d;i++){
//         arrNew.push(arr[i])
//     }

//     for (let i=d;i<arr.length;i++){
//         arr[i-d]=arr[i];
//     }

//     for (let i=arr.length-d;i<arr.length;i++){
//         arr[i]=arrNew[i-(arr.length-d)]
//     }
//     return arr
// }

// const arr=[1,2,3,4,5,6,7,8,9]


// console.log(RotateByDIndex(arr,21))


const rotateArrayD=(arr,d)=>{

    let temp=[];
    for (let i=0;i<arr.length;i++){
        temp[(i+d)%arr.length]=arr[i]
    }
    for (let i=0;i<arr.length;i++){
        arr[i]=temp[i]
    }
    return arr
}

const arr=[1,2,3,4,5,6]

console.log(rotateArrayD(arr,2)) 