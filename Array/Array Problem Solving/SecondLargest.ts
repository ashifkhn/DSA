const SecondLargestElement=(arr:number[]):number=>{
    let largest=arr[0]
    let secondLargest=-1
    for (let i=0; i<arr.length; i++){

        if(arr[i]>largest){
            secondLargest=largest;
            largest=arr[i]
    }
    else if(arr[i]<largest && arr[i]>secondLargest){
        secondLargest=arr[i]
    }
    }   
return secondLargest
}

const array=[1,2,3,4,5,6,7,8,9]

console.log(SecondLargestElement(array))