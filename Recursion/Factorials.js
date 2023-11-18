const Factorial=(number)=>{
 
    if (number===0){
        return 1
    }
    else{
       return Factorial(number-1)*number
    }

}

const a=5;

console.log(Factorial(a))