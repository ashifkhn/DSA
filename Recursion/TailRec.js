const TailRec=(n)=>{

    if (n>0){
        console.log(n)
        TailRec(n-1)
    }

}

TailRec(20)