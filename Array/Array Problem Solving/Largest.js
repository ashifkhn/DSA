const arr= [8,3,2,7,9,0] 

function findLargest(arr){
    let largest = -3;
    for(let i=0; i<=arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;

}
console.log(findLargest(arr));