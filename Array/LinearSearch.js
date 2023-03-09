const arr = [1, 9, 4, 2, 5, 0, 7]


const Search = (arr, item) => {
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === item) {
            return true   
        } 
    }
    return false
    
}


console.log(Search(arr,1))