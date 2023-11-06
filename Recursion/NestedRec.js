const NestedRec=(num)=>{

    if (num>100){
        return num-10
    }

    else{
        return NestedRec(NestedRec(num+11))
    }


}

const a =NestedRec(95)
console.log(a)