const HeadRec=(n)=>{

    if (n>0){
        HeadRec(n-1)
        console.log(n)
    }

}

HeadRec(20)