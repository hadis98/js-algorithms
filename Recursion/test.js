function NoIdea(n){
    if(n>1){
        console.log('A');
        NoIdea(n/3);
        for(let i=0;i<n;i++){
            console.log('B');
        }
        NoIdea(n/3);
    }
}


console.log(NoIdea(2));
console.log(NoIdea(3));
console.log(NoIdea(4));
console.log(NoIdea(5));