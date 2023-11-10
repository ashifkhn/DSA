const SumOfNaturalNumbers=(number)=>{
 
    if (number===0){
        return 0
    }
    else{
       return SumOfNaturalNumbers(number-1)+number
    }

}

const a=5;

console.log(SumOfNaturalNumbers(a))