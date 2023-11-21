const Reverse=(arr)=>{
    let start=0
    let end =arr.length-1
    for (let i=start; i<=end; i++){
        let temp=arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr;
}




const Reverse1=(arr)=>{
    let start=0
    let end =arr.length-1
    for (let i=start; i<=end; i++,start++,end--){
        [arr[start],arr[end]]=[arr[end],arr[start]]
    }
    return arr;
}


const arr=[1,2,3,4,5,6,7,8,9]
const arr2=[1,2,3,4,5,6,7,8,9]
console.log(Reverse1(arr))
console.log(Reverse(arr2))