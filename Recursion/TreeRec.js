const TreeRec=(n)=>{

    if(n>0){
        console.log(n);
        TreeRec(n-1)
        TreeRec(n-1)
    }
}
TreeRec(3)