const IndirectFunction=(n)=>{

    if(n>0){
        console.log(n)
        IndirectFunction2(Math.floor(n-1))
    }

}


const IndirectFunction2=(n)=>{
    if (n>1){
        console.log(n)
        IndirectFunction(Math.floor(n/2))
    }
}



IndirectFunction(20)