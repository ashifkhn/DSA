const RemoveDups=(arr:number[]):number=>{
    let i=0;
    for (let j=0; j<arr.length; j++){
        
        if (arr[i]!=arr[j]){
            arr[i+1]=arr[j];
            i++;
        }
    }
    return i+1

}

const array=[1,2,2,3,4,4,5]

console.log(RemoveDups(array)) 